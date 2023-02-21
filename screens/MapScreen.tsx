import MapView, { Callout, Marker } from "react-native-maps";
import { StyleSheet, Alert } from "react-native";
import { useRef, useCallback, useLayoutEffect, useState } from "react";
import { TabTwoMainStackScreenProps } from "../types";
import HeaderButton from "../components/common/HeaderButton";
import { atmsDummyData } from "../constants/atmsDummyData";
import MarkerCustomCallout from "../features/maps/marker/MarkerCustomCallout";
import Colors, { CustomLightTheme } from "../constants/Colors";
import { useAppDispatch } from "../hooks/reduxHooks";
import {
  setCoords,
  setAddress,
  setLocationUri,
} from "../features/tickets/ticketFormSlice";
import { getMapPreview } from "../util/location";
import { getAddress } from "../util/location";
import MapSearchForm from "../features/maps/search/MapSearchForm";
import useCustomColors from "../hooks/useCustomColors";

export default function MapScreen({
  navigation,
  route,
}: TabTwoMainStackScreenProps<"MapScreen">) {
  const [selectedLocation, setSelectedLocation] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);

  // mapRef służy jako punkt odniesienia do późniejszego przenoszenia widoku na mapie
  const mapRef = useRef<MapView>();

  const region = {
    latitude: route.params?.lat || 51.059412936330716,
    longitude: route.params?.lng || 17.01280990859961,
    latitudeDelta: 0.0922 / 2,
    longitudeDelta: 0.0421 / 2,
  };

  const dispatch = useAppDispatch();

  // zbudowane do funkcjonalności wyszukiwania lupką urządzenia
  const animateToChosenMarker = (lat: number, lng: number) => {
    setSelectedLocation({ lat: lat, lng: lng });
    mapRef.current!.animateToRegion(
      {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922 / 12,
        longitudeDelta: 0.0421 / 12,
      },
      1000
    );
  };

  const t = useCustomColors();
  const atmData = atmsDummyData;

  const savePickedLocationHandler = useCallback(async () => {
    if (!selectedLocation) {
      Alert.alert(
        "Lokalizacja urządzenia nie została wybrana!",
        "Proszę stuknięciem w ekran wybrać lokalizację urządzenia."
      );
      return;
    }
    dispatch(
      setCoords({
        coords: {
          lat: selectedLocation.lat,
          lng: selectedLocation.lng,
          pickedFromMap: true,
        },
      })
    );
    dispatch(
      setLocationUri({
        locationUri: getMapPreview(selectedLocation.lat, selectedLocation.lng),
      })
    );
    const currentAddress = await getAddress(
      selectedLocation.lat,
      selectedLocation.lng
    );
    dispatch(setAddress({ address: currentAddress }));
    navigation.navigate("CreateTicketScreen");
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          icon="save-outline"
          text="Zapisz"
          color={t.blue}
          position="right"
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView
      ref={mapRef}
      userInterfaceStyle={
        t.theme === "light" ? "light" : t.theme === "dark" ? "dark" : undefined
      }
      style={styles.map}
      region={region}
    >
      {atmData.map((element, index) => (
        <Marker
          tracksViewChanges={false}
          stopPropagation={true}
          key={index}
          coordinate={{ latitude: element.lat, longitude: element.lng }}
          onPress={() => {
            setSelectedLocation({ lat: element.lat, lng: element.lng });
          }}
          title={element.nazwaLokalizacji}
          pinColor={
            element.instytucja === "PlanetCash"
              ? "rgb(0,146,255)"
              : element.instytucja === "ING" ||
                element.instytucja === "PlanetING"
                ? "rgb(255,98,0)"
                : element.instytucja === "PlanetBNPP"
                  ? "rgb(26,158,106)"
                  : element.instytucja === "CreditAgricole"
                    ? "#19b9b9"
                    : "t.brown"
          }
          description={element.lokalizacja}
        >
          <Callout>
            <MarkerCustomCallout element={element} />
          </Callout>
        </Marker>
      ))}
      <MapSearchForm animateToChosenMarker={animateToChosenMarker} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  textBtn: {
    position: "absolute",
    bottom: 100,
    right: 100,
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  map: {
    flex: 1,
  },
});
