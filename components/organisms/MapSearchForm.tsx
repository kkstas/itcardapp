import { StyleSheet, Text, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

interface IMapSearchForm {
  animateToChosenMarker: (lat: number, lng: number) => void;
}

const MapSearchForm = ({ animateToChosenMarker }: IMapSearchForm) => {
  const headerHeight = useHeaderHeight();
  return <View style={styles.container}></View>;
};

export default MapSearchForm;

const styles = StyleSheet.create({
  container: {},
});
