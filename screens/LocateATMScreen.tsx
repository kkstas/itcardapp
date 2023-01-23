import MapView, { MapPressEvent, Marker, UrlTile } from 'react-native-maps';
import { StyleSheet, Alert, Platform } from 'react-native';
import { useCallback, useLayoutEffect, useState } from 'react';
import { TabTwoMainStackScreenProps } from '../types';
import HeaderButton from '../components/atoms/HeaderButton';
import openMap, { createOpenLink, createMapLink } from 'react-native-open-maps';
import * as Linking from 'expo-linking';

interface IatmElement {
	lat: number;
	lng: number;
	title: string;
	description: string;
	pinColor: string;
}
export default function LocateATMScreen({
	navigation,
	route,
}: TabTwoMainStackScreenProps<'LocateATMScreen'>) {
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
		{
			lat: 51.10261543016718,
			lng: 17.052772784658345,
			title: 'Biedronka',
			description: 'ul. Szybka',
			pinColor: 'lightblue',
		},
	];

	const region = {
		latitude: route.params.lat,
		longitude: route.params.lng,
		latitudeDelta: 0.0922 / 2,
		longitudeDelta: 0.0421 / 2,
	};

	function openLinkToMap(lat: number, lng: number, label: string) {
		const appleUrl = `maps:0,0?q=${label}@${lat},${lng}`;
		// const googleUrl = `geo:0,0?q=${lat},${lng}(${label})`;
		Linking.openURL(appleUrl);
	}

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
					onPress={() => openLinkToMap(element.lat, element.lng, element.title)}
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
