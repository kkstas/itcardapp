import { TabTwoMainStackScreenProps } from '../types';
import MainScreenTemplate from '../components/templates/MainScreenTemplate';

import { Alert, Text, Pressable, Image, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import {
	PermissionStatus,
	getCurrentPositionAsync,
	useForegroundPermissions,
} from 'expo-location';

export default function TabTwoScreen({
	navigation,
}: TabTwoMainStackScreenProps<'TabTwoScreen'>) {
	const [isFetchingLocation, setIsFetchingLocation] = useState(false);
	const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

	function navigateToProfile() {
		navigation.navigate('Root', { screen: 'TabThree' });
	}

	async function verifyPermissions() {
		if (locationPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}
		if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Niewystarczające uprawnienia!',
				'Musisz udzielić zgody na wykorzystywanie lokalizacji na urządzeniu, aby korzystać z tej usługi.'
			);
			return false;
		}
		return true;
	}

	function navigateToInfo(appTitle: string, appDescription: string, bottomInfo: string) {
		navigation.navigate('InfoModal', {
			appTitle: appTitle,
			appDescription: appDescription,
			bottomInfo: bottomInfo,
		});
	}

	function navigateToTicket() {
		navigation.navigate('CreateTicketScreen');
	}

	function navigateToScanReceipt() {
		navigation.navigate('ScanReceiptScreen');
	}

	async function navigateToLocateATM() {
		setIsFetchingLocation(true);
		const hasPermission = await verifyPermissions();
		if (!hasPermission) {
			setIsFetchingLocation(false);
			return;
		}
		const location = await getCurrentPositionAsync();
		setIsFetchingLocation(false);
		navigation.navigate('LocateATMScreen', {
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
	}

	return (
		<MainScreenTemplate
			navigateToInfo={navigateToInfo}
			navigateToProfile={navigateToProfile}
			navigateToTicket={navigateToTicket}
			navigateToScanReceipt={navigateToScanReceipt}
			navigateToLocateATM={navigateToLocateATM}
		/>
	);
}
