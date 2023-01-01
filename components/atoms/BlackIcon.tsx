import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Pressable, Text } from "react-native";
import dimensions from "../../constants/Layout";

export default function BlackIcon() {
  return (
    <Pressable
      style={[
        styles.container,
        {
          width: dimensions.window.width / 8,
          height: dimensions.window.width / 8,
        },
      ]}
    >
      <LinearGradient
        colors={["rgb(60,60,80)", "rgb(10,10,10)"]}
        style={styles.grad}
      >
        <Ionicons name="paper-plane" color="#fff" size={30} />
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  grad: {
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: 50,
    height: 50,
  },
});
