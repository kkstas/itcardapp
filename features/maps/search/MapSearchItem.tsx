import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import React from "react";
import { IatmElement } from "../../../constants/atmsDummyData";
import useCustomColors from "../../../hooks/useCustomColors";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

interface IMapSearchItem {
  data: IatmElement;
  onPress: () => void;
  index: number;
  screenWidth: number;
}

const MapSearchItem = ({
  data,
  onPress,
  index,
  screenWidth,
}: IMapSearchItem) => {
  const t = useCustomColors();
  return (
    <Animated.View
      entering={FadeIn.delay(index * 50)}
      exiting={FadeOut.delay(index * 20)}
    >
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor: t.bgTertiary,
            // t.theme === "dark" ? "rgba(22, 28, 33, 1)" : t.bgTertiary,
          },
        ]}
      >
        <Ionicons
          name="locate-outline"
          size={24}
          color={t.tint}
          style={styles.icon}
        />
        <View style={styles.content}>
          <Text
            style={[
              styles.deviceText,
              { color: t.tint, width: screenWidth * 0.47 },
            ]}
          >
            {data.nazwa}
          </Text>
          <Text
            style={[
              styles.locText,
              { color: t.text, width: screenWidth * 0.47 },
            ]}
          >
            {data.nazwaLokalizacji.trim()}
          </Text>
          <Text
            style={[
              styles.addressText,
              { color: t.labelSecondary, width: screenWidth * 0.47 },
            ]}
          >
            {data.adresLokalizacji.trim()}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default MapSearchItem;

const styles = StyleSheet.create({
  icon: {},
  content: {
    //text
  },
  addressText: {
    textAlign: "right",
    fontSize: 11,
    alignSelf: "flex-end",
  },
  locText: {
    textAlign: "right",
    fontSize: 15,
  },
  deviceText: {
    textAlign: "right",
    fontSize: 8,
    fontWeight: "700",
  },
  container: {
    borderRadius: 9,
    paddingHorizontal: 9,
    paddingVertical: 8,
    alignItems: "center",
    marginVertical: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
