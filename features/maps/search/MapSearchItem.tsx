import { StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import { IatmElement } from "../../../constants/atmsDummyData";
import useCustomColors from "../../../hooks/useCustomColors";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

interface IMapSearchItem {
  data: IatmElement;
  onPress: () => void;
  index: number;
}

const MapSearchItem = ({ data, onPress, index }: IMapSearchItem) => {
  const t = useCustomColors();
  return (
    <Animated.View
      entering={FadeIn.delay(index * 50)}
      exiting={FadeOut.delay(index * 20)}
    >
      <Pressable
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor:
              t.theme === "dark" ? "rgba(22, 28, 33, 0.5)" : t.bgTertiary,
          },
        ]}
      >
        <Text style={[styles.deviceText, { color: t.tint }]}>{data.nazwa}</Text>
        <Text style={[styles.locText, { color: t.text }]}>
          {data.nazwaLokalizacji.trim()}
        </Text>
        <Text style={[styles.addressText, { color: t.labelSecondary }]}>
          {data.adresLokalizacji.trim()}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default MapSearchItem;

const styles = StyleSheet.create({
  addressText: {
    textAlign: "right",
    fontSize: 11,
  },
  locText: {
    fontSize: 15,
  },
  deviceText: {
    fontSize: 8,
    fontWeight: "700",
  },
  container: {
    borderRadius: 9,
    paddingHorizontal: 9,
    paddingVertical: 6,
    alignItems: "flex-end",
    marginVertical: 1,
  },
});
