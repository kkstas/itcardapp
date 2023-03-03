import { TabTwoMainStackScreenProps } from '../types';
import MainScreenTemplate from '../components/tabTwoScreen/MainScreenTemplate';

import { Alert } from 'react-native';
import { useState } from 'react';
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from 'expo-location';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setLocation } from '../store/slices/locationSlice';

export default function TabTwoScreen({
  navigation,
}: TabTwoMainStackScreenProps<'TabTwoScreen'>) {
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const dispatch = useAppDispatch();
  const locationInfo = useAppSelector((state) => state.locationSlice.location);

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  function navigateToProfile() {
    navigation.navigate('Root', { screen: 'TabThree' });
  }

  async function verifyPermissions() {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
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

  function navigateToInfo(
    appTitle: string,
    appDescription: string,
    bottomInfo: string
  ) {
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
    let location;
    setIsFetchingLocation(true);
    if (!locationInfo?.coords) {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        setIsFetchingLocation(false);
        return;
      }
      location = await getCurrentPositionAsync();
      dispatch(setLocation(location));
    } else {
      location = locationInfo;
    }
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
      isFetchingLocation={isFetchingLocation}
    />
  );
}
