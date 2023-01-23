import MapView, { MapPressEvent, Marker } from 'react-native-maps';
import { StyleSheet, Alert } from 'react-native';
import { useCallback, useLayoutEffect, useState } from 'react';
import { TabTwoMainStackScreenProps } from '../types';
import HeaderButton from '../components/atoms/HeaderButton';

interface IatmElement {
	lat: number;
	lng: number;
	title: string;
	description: string;
	pinColor: string;
}
export default function MapScreen({
	navigation,
	route,
}: TabTwoMainStackScreenProps<'MapScreen'>) {
	const [selectedLocation, setSelectedLocation] = useState<
		{ lat: number; lng: number } | undefined
	>(undefined);

	const atmData: IatmElement[] = [
		{
			lat: 51.09999485226624,
			lng: 17.067454706266,
			title: 'title',
			description: 'desc',
			pinColor: 'red',
		},
		{
			lat: 51.09799144029021,
			lng: 17.071068452616803,
			title: 'title2',
			description: 'descasfw3',
			pinColor: 'yellow',
		},
		{
			lat: 51.097452,
			lng: 17.063619,
			title: 'dfadf',
			description: 'fefe',
			pinColor: 'purple',
		},
	];

	const region = {
		latitude: route.params?.lat || 51.059412936330716,
		longitude: route.params?.lng || 17.01280990859961,
		latitudeDelta: 0.0922 / 2,
		longitudeDelta: 0.0421 / 2,
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
					icon='save-outline'
					text='Zapisz'
					position='right'
					onPress={savePickedLocationHandler}
				/>
			),
		});
	}, [navigation, savePickedLocationHandler]);

	return (
		<MapView
			style={styles.map}
			initialRegion={region}
		>
			{atmData.map((element, index) => (
				<Marker
					stopPropagation={true}
					key={index}
					coordinate={{ latitude: element.lat, longitude: element.lng }}
					onPress={() => {
						setSelectedLocation({ lat: element.lat, lng: element.lng });
					}}
					title={element.title}
					pinColor={element.pinColor}
					description={element.description}
				/>
			))}
		</MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});
