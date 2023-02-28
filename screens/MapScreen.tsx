import MapView, {
  Circle,
  Callout,
  MapPressEvent,
  Marker,
  MarkerSelectEvent,
} from 'react-native-maps';
import { Keyboard, Text, View, StyleSheet, Alert } from 'react-native';
import { useRef, useCallback, useLayoutEffect, useState } from 'react';
import { TabTwoMainStackScreenProps } from '../types';
import HeaderButton from '../components/common/HeaderButton';
import { atmsDummyData } from '../constants/atmsDummyData';
import MarkerCustomCallout from '../features/maps/marker/MarkerCustomCallout';
import { useAppDispatch } from '../hooks/reduxHooks';
import {
  setCoords,
  setAddress,
  setLocationUri,
} from '../features/tickets/ticketFormSlice';
import { getMapPreview } from '../util/location';
import { getAddress } from '../util/location';
import MapSearchForm from '../features/maps/search/MapSearchForm';
import useCustomColors from '../hooks/useCustomColors';

export default function MapScreen({
  navigation,
  route,
}: TabTwoMainStackScreenProps<'MapScreen'>) {
  const [selectedLocation, setSelectedLocation] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);
  const [isSearchShown, setIsSearchShown] = useState(false);

  // mapRef służy jako punkt odniesienia do późniejszego przenoszenia widoku na mapie
  const mapRef = useRef<MapView | null>();
  const markersRef = useRef<any[]>([]);

  const region = {
    latitude: route.params?.lat || 51.059412936330716,
    longitude: route.params?.lng || 17.01280990859961,
    latitudeDelta: 0.0922 / 2,
    longitudeDelta: 0.0421 / 2,
  };

  const dispatch = useAppDispatch();

  // zbudowane do funkcjonalności wyszukiwania lupką urządzenia
  const animateToChosenMarker = (id: number, lat: number, lng: number) => {
    setSelectedLocation({ lat: lat, lng: lng });

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

  const t = useCustomColors();
  const atmData = atmsDummyData;

  const savePickedLocationHandler = useCallback(async () => {
    if (!selectedLocation) {
      Alert.alert(
        'Lokalizacja urządzenia nie została wybrana!',
        'Proszę stuknięciem w ekran wybrać lokalizację urządzenia.'
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
    navigation.navigate('CreateTicketScreen');
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          icon='save-outline'
          text='Zapisz'
          color={t.blue}
          position='right'
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

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
        userInterfaceStyle={
          t.theme === 'light'
            ? 'light'
            : t.theme === 'dark'
            ? 'dark'
            : undefined
        }
        style={styles.map}
        region={region}
      >
        {atmData.map((element, index) => (
          <Marker
            //tracksViewChanges={false}
            key={element.id}
            ref={(ref) => {
              markersRef.current[element.id] = ref;
            }}
            // identifier={element.id}
            coordinate={{ latitude: element.lat, longitude: element.lng }}
            onSelect={(event: MarkerSelectEvent) => {
              setSelectedLocation({ lat: element.lat, lng: element.lng });
            }}
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

        {/* circle służy do wskazywania aktualnej pozycji usera */}
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
  textBtn: {
    position: 'absolute',
    bottom: 100,
    right: 100,
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  map: {
    flex: 1,
  },
});
