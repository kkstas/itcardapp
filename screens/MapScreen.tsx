import MapView, { MapPressEvent, Marker } from 'react-native-maps';
import { StyleSheet, Alert } from 'react-native';
import { useCallback, useLayoutEffect, useState } from 'react';
import { TabTwoMainStackScreenProps } from '../types';
import HeaderButton from '../components/atoms/HeaderButton';

export default function MapScreen({
	navigation,
	route,
}: TabTwoMainStackScreenProps<'MapScreen'>) {
	const [selectedLocation, setSelectedLocation] = useState<
		{ lat: number; lng: number } | undefined
	>(undefined);

	const region = {
		latitude: route.params?.lat || 51.059412936330716,
		longitude: route.params?.lng || 17.01280990859961,
		latitudeDelta: 0.0922 / 2,
		longitudeDelta: 0.0421 / 2,
	};

	const selectLocationHandler = (event: MapPressEvent) => {
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;

		setSelectedLocation({ lat: lat, lng: lng });
	};

	const savePickedLocationHandler = useCallback(() => {
		if (!selectedLocation) {
			Alert.alert(
				'Lokalizacja urządzenia nie została wybrana!',
				'Proszę stuknięciem w ekran wybrać lokalizację urządzenia.'
			);
			return;
		}
		navigation.navigate('CreateTicketScreen', {
			pickedLat: selectedLocation.lat,
			pickedLng: selectedLocation.lng,
		});
	}, [navigation, selectedLocation]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButton
					icon="save-outline"
					text="Zapisz"
					position="right"
					onPress={savePickedLocationHandler}
				/>
			),
		});
	}, [navigation, savePickedLocationHandler]);

	return (
		<MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
			{selectedLocation && (
				<Marker
					title="Wybrana lokalizacja"
					coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }}
				/>
			)}
		</MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});
