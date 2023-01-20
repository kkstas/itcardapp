import { Alert, Text, Pressable, View, StyleSheet } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import {
	PermissionStatus,
	getCurrentPositionAsync,
	useForegroundPermissions,
} from 'expo-location';

export default function LocationButtons() {
	const t = useCustomColors();

	const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

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
		const hasPermission = await verifyPermissions();
		if (!hasPermission) {
			return;
		}
		const location = await getCurrentPositionAsync();
		console.log(location);
	}

	function pickOnMapHandler() {
		console.log('pick on map func');
	}

	return (
		<View style={[styles.container, { backgroundColor: t.textInput }]}>
			<Pressable onPress={locateMeHandler} style={styles.locateMeButton}>
				<Text style={styles.locateMeText}>Zlokalizuj mnie</Text>
			</Pressable>
			<Pressable onPress={pickOnMapHandler} style={styles.pickOnMapButton}>
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
		height: 200,
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
	},
});
