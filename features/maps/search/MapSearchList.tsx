import { StyleSheet, View, useWindowDimensions } from "react-native";
import returnMatchingATMs from "../../../util/returnMatchingATMs";
import MapSearchItem from "./MapSearchItem";

export interface IMapSearchList {
  inputValue: string;
  onItemPress: (id: number, lat: number, lng: number) => void;
}

const MapSearchList = (props: IMapSearchList) => {
  const matchingATMs = returnMatchingATMs(props.inputValue);
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width * 0.6 }]}>
      {matchingATMs &&
        matchingATMs.map((atm, index) => (
          <MapSearchItem
            key={atm.id}
            onPress={() => props.onItemPress(atm.id, atm.lat, atm.lng)}
            data={atm}
            screenWidth={width}
            index={index}
          />
        ))}
    </View>
  );
};

export default MapSearchList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
});
