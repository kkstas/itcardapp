import MapView, { Callout, Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { TabTwoMainStackScreenProps } from "../types";
import * as Linking from "expo-linking";
import { IatmElement, atmsDummyData } from "../constants/atmsDummyData";
import MarkerCustomCallout from "../components/atoms/MarkerCustomCallout";

export default function LocateATMScreen({
  route,
}: TabTwoMainStackScreenProps<"LocateATMScreen">) {
  const atmData: IatmElement[] = atmsDummyData;
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
    <MapView style={styles.map} initialRegion={region}>
      {atmData.map((element, index) => (
        <Marker
          stopPropagation={true}
          key={index}
          coordinate={{ latitude: element.lat, longitude: element.lng }}
          onCalloutPress={() =>
            openLinkToMap(element.lat, element.lng, element.adresLokalizacji)
          }
          title={element.lokalizacja}
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
          description={element.moduly}
        >
          <Callout>
            <MarkerCustomCallout element={element} />
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
