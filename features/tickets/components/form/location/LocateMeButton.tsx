import { Text, StyleSheet } from "react-native";
import useCustomColors from "../../../../../hooks/useCustomColors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { FadeInRight, FadeOut } from "react-native-reanimated";

interface ILocateMeButton {
  onPress: () => void;
  text: string;
  icon: keyof typeof Ionicons.glyphMap;
}
export default function LocateMeButton({
  onPress,
  text,
  icon,
}: ILocateMeButton) {
  const t = useCustomColors();

  return (
    <Animated.View entering={FadeInRight.delay(400)} exiting={FadeOut}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, { backgroundColor: t.bgTertiaryGrouped }]}
      >
        <Ionicons name={icon} color={t.tint} size={32} />
        <Text style={[styles.text, { color: t.tint }]}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  container: {
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingVertical: 12,
    width: 110,
    height: 80,
  },
});
