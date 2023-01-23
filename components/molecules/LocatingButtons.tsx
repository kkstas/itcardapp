import { Alert, Text, Pressable, Image, View, StyleSheet } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import {
	PermissionStatus,
	getCurrentPositionAsync,
	useForegroundPermissions,
} from 'expo-location';
import { useEffect, useState } from 'react';
import { getMapPreview, getAddress } from '../../util/location';
import { useIsFocused } from '@react-navigation/native';

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
			if (isFocused && pickedLocationParams) {
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
		const currentAddress = await getAddress(
			location.coords.latitude,
			location.coords.longitude
		);
		setAddress(currentAddress);
		setPickedLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
		setLocationUri(getMapPreview(location.coords.latitude, location.coords.longitude));
		setIsFetchingLocation(false);
	}

	async function pickOnMapHandler() {
		setIsFetchingLocation(true);
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

	let locationPreview = <Text>Lokalizacja nie zostala wybrana</Text>;
	if (pickedLocation) {
		locationPreview = (
			<Image
				style={styles.image}
				source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }}
			/>
		);
	}

	return (
		<View style={[styles.container, { backgroundColor: t.textInput }]}>
			{isFetchingLocation && (
				<View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
			)}
			{locationPreview}
			<Pressable
				onPress={locateMeHandler}
				style={styles.locateMeButton}
			>
				<Text style={styles.locateMeText}>Zlokalizuj mnie</Text>
			</Pressable>
			<Pressable
				onPress={pickOnMapHandler}
				style={styles.pickOnMapButton}
			>
				<Text style={styles.pickOnMapText}>Wybierz na mapie</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
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
