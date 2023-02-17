import { useState } from "react";
import { useAppDispatch } from "./reduxHooks";
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import {
  setAddress,
  setLocationUri,
  setCoords,
  clearLocationInputs,
} from "../store/slices/ticketData";
import { Alert } from "react-native";
import { getAddress } from "../util/location";
import { getMapPreview } from "../util/location";

type TgoToMapScreen = (lat: number, lng: number) => void;

/**
 *
 * @param goToMapScreen - fc that takes lat and lng props and navigates to MapScreen
 * @returns { isFetchingLocation, locateMe, pickOnMap, resetLocation }
 */
const useLocation = (goToMapScreen: TgoToMapScreen) => {
  const [isFetchingLocation, setIsFetchingLocation] = useState<boolean>(false);
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const dispatch = useAppDispatch();

  async function verifyPermissions() {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Niewystarczające uprawnienia!",
        "Musisz udzielić zgody na wykorzystywanie usług lokalizacji na urządzeniu, aby korzystać z tej usługi."
      );
      return false;
    }
    return true;
  }

  const locateMe = async () => {
    setIsFetchingLocation(true);
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      setIsFetchingLocation(false);
      return;
    }
    const location = await getCurrentPositionAsync();
    dispatch(
      setCoords({
        coords: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
          pickedFromMap: false,
        },
      })
    );
    const currentAddress = await getAddress(
      location.coords.latitude,
      location.coords.longitude
    );
    dispatch(setAddress({ address: currentAddress }));
    dispatch(
      setLocationUri({
        locationUri: getMapPreview(
          location.coords.latitude,
          location.coords.longitude
        ),
      })
    );
    setIsFetchingLocation(false);
  };

  const pickOnMap = async () => {
    setIsFetchingLocation(true);
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      setIsFetchingLocation(false);
      return;
    }
    const location = await getCurrentPositionAsync();
    setIsFetchingLocation(false);
    goToMapScreen(location.coords.latitude, location.coords.longitude);
  };

  const resetLocation = () => {
    dispatch(clearLocationInputs());
  };

  return { isFetchingLocation, locateMe, pickOnMap, resetLocation };
};

export default useLocation;
