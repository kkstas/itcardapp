import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import useCustomColors from "../../../../../hooks/useCustomColors";
import LocateMeButton from "./LocateMeButton";
import LoadingOverlay from "../../../../../components/common/LoadingOverlay";
import { Ionicons } from "@expo/vector-icons";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
import useLocation from "../../../useLocation";

interface ILocationButtons {
  goToMapScreen: (lat: number, lng: number) => void;
}

function LocationButtons({ goToMapScreen }: ILocationButtons) {
  const { coords, locationUri } = useAppSelector((state) => state.ticketData);
  const t = useCustomColors();
  const { isFetchingLocation, locateMe, pickOnMap, resetLocation } =
    useLocation(goToMapScreen);

  return (
    <View style={[styles.container, { backgroundColor: t.textInput }]}>
      {isFetchingLocation && <LoadingOverlay />}
      {!isFetchingLocation && locationUri && (
        <Image style={styles.image} source={{ uri: locationUri }} />
      )}
      {coords && (
        <TouchableOpacity onPress={resetLocation} style={styles.exitBtnView}>
          <Ionicons name="close" color={t.pink} size={32} />
        </TouchableOpacity>
      )}
      {!isFetchingLocation && !coords && (
        <>
          <LocateMeButton
            icon="navigate-circle-outline"
            text="Zlokalizuj mnie"
            onPress={locateMe}
          />
          <LocateMeButton
            icon="map-outline"
            text="Wybierz na mapie"
            onPress={pickOnMap}
          />
        </>
      )}
    </View>
  );
}

export default LocationButtons;

const styles = StyleSheet.create({
  exitBtnView: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  container: {
    height: 220,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
