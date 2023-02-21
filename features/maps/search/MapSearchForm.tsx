import { StyleSheet, Text, View, TextInput } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import useCustomColors from "../../../hooks/useCustomColors";
import MapSearchList from "./MapSearchList";
import { useState } from "react";

interface IMapSearchForm {
  animateToChosenMarker: (lat: number, lng: number) => void;
}

const MapSearchForm = ({ animateToChosenMarker }: IMapSearchForm) => {
  const [value, setValue] = useState<string>("");
  const headerHeight = useHeaderHeight();
  const t = useCustomColors();
  return (
    <View style={[styles.container, { top: headerHeight }]}>
      <View style={styles.textInputView}>
        <TextInput
          value={value}
          onChangeText={(text) => setValue(text)}
          style={styles.textInput}
        />
      </View>
      <MapSearchList inputValue={value} onItemPress={animateToChosenMarker} />
    </View>
  );
};

export default MapSearchForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
  },
  textInputView: {
    width: 200,
  },
  container: {
    alignItems: "flex-end",
    paddingTop: 20,
    paddingRight: 20,
    width: "100%",
  },
});
