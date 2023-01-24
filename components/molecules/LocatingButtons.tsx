import {
	TouchableOpacity,
	Alert,
	Text,
	Pressable,
	Image,
	View,
	StyleSheet,
	Touchable,
} from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import {
	PermissionStatus,
	getCurrentPositionAsync,
	useForegroundPermissions,
} from 'expo-location';
import { useEffect, useState } from 'react';
import { getMapPreview, getAddress } from '../../util/location';
import { useIsFocused } from '@react-navigation/native';
import LocateMeButton from '../atoms/LocateMeButton';
import LoadingOverlay from '../atoms/LoadingOverlay';
import { Ionicons } from '@expo/vector-icons';

export default function LocationButtons({
	goToMapScreen,
	pickedLocationParams,
	setLocationUri,
	setAddress,
}: {
	goToMapScreen: (lat: number, lng: number) => void;
	pickedLocationParams: { lat: number; lng: number } | null;
	setLocationUri: React.Dispatch<React.SetStateAction<string | null>>;
	setAddress: React.Dispatch<React.SetStateAction<string | null>>;
}) {
	const t = useCustomColors();
	const [isFetchingLocation, setIsFetchingLocation] = useState(false);
	const [pickedLocation, setPickedLocation] = useState<{
		lat: number;
		lng: number;
	} | null>(null);

	const isFocused = useIsFocused();
	const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

	useEffect(() => {
		async function handleLocation() {
			if (isFocused && pickedLocationParams && !pickedLocation) {
				setPickedLocation(pickedLocationParams);
				setLocationUri(getMapPreview(pickedLocationParams.lat, pickedLocationParams.lng));
				const currentAddress = await getAddress(
					pickedLocationParams.lat,
					pickedLocationParams.lng
				);
				setAddress(currentAddress);
			}
		}
		handleLocation();
	}, [isFocused, pickedLocationParams]);

	async function verifyPermissions() {
		if (locationPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}
		if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Niewystarczające uprawnienia!',
				'Musisz udzielić zgody na wykorzystywanie usług lokalizacji na urządzeniu, aby korzystać z tej usługi.'
			);
			return false;
		}
		return true;
	}

	async function locateMeHandler() {
		setIsFetchingLocation(true);
		const hasPermission = await verifyPermissions();
		if (!hasPermission) {
			setIsFetchingLocation(false);
			return;
		}
		const location = await getCurrentPositionAsync();
		console.log('LOCATE ME COORDS:');

		setPickedLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
		console.log(location.coords);
		const currentAddress = await getAddress(
			location.coords.latitude,
			location.coords.longitude
		);
		setAddress(currentAddress);
		setLocationUri(getMapPreview(location.coords.latitude, location.coords.longitude));
		setIsFetchingLocation(false);
	}

	async function pickOnMapHandler() {
		setIsFetchingLocation(true);
		setLocationUri(null);
		const hasPermission = await verifyPermissions();
		if (!hasPermission) {
			setIsFetchingLocation(false);
			return;
		}
		const location = await getCurrentPositionAsync();
		setIsFetchingLocation(false);
		goToMapScreen(location.coords.latitude, location.coords.longitude);
	}

	console.log('LocatingButtons refreshed');

	let locationPreview = null;
	if (pickedLocation && !locationPreview) {
		locationPreview = (
			<Image
				style={styles.image}
				source={{
					uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
				}}
			/>
		);
	}

	const resetLocationHandler = () => {
		setPickedLocation(null);
	};

	return (
		<View style={[styles.container, { backgroundColor: t.textInput }]}>
			{isFetchingLocation && <LoadingOverlay />}
			{!isFetchingLocation && locationPreview}
			{pickedLocation && (
				<TouchableOpacity
					onPress={resetLocationHandler}
					style={styles.exitBtnView}
				>
					<Ionicons
						name='close'
						color={t.pink}
						size={32}
					/>
				</TouchableOpacity>
			)}
			{!isFetchingLocation && !pickedLocation && (
				<>
					<LocateMeButton
						icon='navigate-circle-outline'
						text='Zlokalizuj mnie'
						onPress={locateMeHandler}
					/>
					<LocateMeButton
						icon='map-outline'
						text='Wybierz na mapie'
						onPress={pickOnMapHandler}
					/>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	exitBtnView: {
		position: 'absolute',
		right: 10,
		top: 10,
	},
	pickOnMapText: {},
	pickOnMapButton: {},
	locateMeText: {},
	locateMeButton: {},
	container: {
		height: 220,
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
		overflow: 'hidden',
	},
	image: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
});
