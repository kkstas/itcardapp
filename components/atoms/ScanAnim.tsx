import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useCustomColors from "../../hooks/useCustomColors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

export default function ScanAnim({ scanned }: { scanned: boolean }) {
  const t = useCustomColors();
  const offset = useSharedValue(0);
  const anim = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${offset.value * 140}deg` },
        { scale: 1 + 0.2 * offset.value },
      ],
    };
  });

  offset.value = withRepeat(
    withSequence(
      withTiming(1, { duration: 400 }),
      withTiming(0, { duration: 400 })
    ),
    scanned ? 1 : -1,
    false
  );

  return (
    <Animated.View style={[styles.container, anim]}>
      <Ionicons name="scan" size={36} color={t.tint} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
