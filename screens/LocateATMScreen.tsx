import MapView, { Callout, MapPressEvent, Marker, UrlTile } from 'react-native-maps';
import { StyleSheet, Alert, Platform, View, Text } from 'react-native';
import { useCallback, useLayoutEffect, useState } from 'react';
import { TabTwoMainStackScreenProps } from '../types';
import HeaderButton from '../components/atoms/HeaderButton';
import openMap, { createOpenLink, createMapLink } from 'react-native-open-maps';
import * as Linking from 'expo-linking';
import { IatmElement, atmsDummyData } from '../constants/atmsDummyData';
import MarkerCustomCallout from '../components/atoms/MarkerCustomCallout';
import useCustomColors from '../hooks/useCustomColors';

export default function LocateATMScreen({
	navigation,
	route,
}: TabTwoMainStackScreenProps<'LocateATMScreen'>) {
	const atmData: IatmElement[] = atmsDummyData;
	const t = useCustomColors();
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
					onCalloutPress={() => openLinkToMap(element.lat, element.lng, element.title)}
					title={element.title}
					pinColor={element.pinColor}
					description={element.description}
				>
					<Callout>
						<MarkerCustomCallout />
					</Callout>
				</Marker>
			))}
		</MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});
