import { Keyboard, StyleSheet } from 'react-native';
import { useState, useRef } from 'react';
import { TabTwoMainStackScreenProps } from '../types';
import * as Linking from 'expo-linking';
import { IatmElement, atmsDummyData } from '../constants/atmsDummyData';

import MapSearchForm from '../features/maps/search/MapSearchForm';
import MarkerCustomCallout from '../features/maps/marker/MarkerCustomCallout';
import MapView, {
  Callout,
  MapPressEvent,
  Marker,
  Circle,
} from 'react-native-maps';
import useCustomColors from '../hooks/useCustomColors';

export default function LocateATMScreen({
  route,
}: TabTwoMainStackScreenProps<'LocateATMScreen'>) {
  const t = useCustomColors();
  const [isSearchShown, setIsSearchShown] = useState(false);

  const mapRef = useRef<MapView | null>();
  const markersRef = useRef<any[]>([]);

  const atmData: IatmElement[] = atmsDummyData;
  const region = {
    latitude: route.params.lat,
    longitude: route.params.lng,
    latitudeDelta: 0.0922 / 2,
    longitudeDelta: 0.0421 / 2,
  };

  const animateToChosenMarker = (id: number, lat: number, lng: number) => {
    mapRef.current!.animateToRegion(
      {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922 / 2,
        longitudeDelta: 0.0421 / 2,
      },
      800
    );
    setTimeout(() => {
      markersRef.current[id].showCallout();
    }, 1200);
  };

  function openLinkToMap(lat: number, lng: number, label: string) {
    const appleUrl = `maps:0,0?q=${label}@${lat},${lng}`;
    // const googleUrl = `geo:0,0?q=${lat},${lng}(${label})`;
    Linking.openURL(appleUrl);
  }

  const markerPressed = () => {
    Keyboard.dismiss();
  };

  const mapPressed = (event: MapPressEvent) => {
    Keyboard.dismiss();
    setIsSearchShown(false);
  };

  return (
    <>
      <MapView
        onPress={mapPressed}
        onMarkerPress={markerPressed}
        ref={(r) => (mapRef.current = r)}
        region={region}
        style={styles.map}
        initialRegion={region}
        userInterfaceStyle={
          t.theme === 'light'
            ? 'light'
            : t.theme === 'dark'
            ? 'dark'
            : undefined
        }
      >
        {atmData.map((element, index) => (
          <Marker
            key={element.id}
            ref={(ref) => {
              markersRef.current[element.id] = ref;
            }}
            onCalloutPress={() =>
              openLinkToMap(element.lat, element.lng, element.adresLokalizacji)
            }
            coordinate={{ latitude: element.lat, longitude: element.lng }}
            title={element.nazwaLokalizacji}
            pinColor={
              element.instytucja === 'PlanetCash'
                ? 'rgb(0,146,255)'
                : element.instytucja === 'ING' ||
                  element.instytucja === 'PlanetING'
                ? 'rgb(255,98,0)'
                : element.instytucja === 'PlanetBNPP'
                ? 'rgb(26,158,106)'
                : element.instytucja === 'CreditAgricole'
                ? '#19b9b9'
                : 't.brown'
            }
            description={element.lokalizacja}
          >
            <Callout>
              <MarkerCustomCallout element={element} />
            </Callout>
          </Marker>
        ))}

        <Circle
          center={{ latitude: region.latitude, longitude: region.longitude }}
          radius={100} // radius jest liczony w metrach
          fillColor='rgba(50,255,255,0.2)'
          strokeColor='rgba(50,255,255,0.2)'
        />
      </MapView>

      <MapSearchForm
        isShown={isSearchShown}
        setIsSearchShown={setIsSearchShown}
        animateToChosenMarker={animateToChosenMarker}
      />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
