import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import useCustomColors from "../hooks/useCustomColors";

export const HeaderBackgroundBlur = () => {
  const t = useCustomColors();
  return (
    <BlurView
      tint={t.theme === "dark" ? "dark" : "light"}
      intensity={30}
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor:
            t.theme === "light" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
        },
      ]}
    />
  );
};
