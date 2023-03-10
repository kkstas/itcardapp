
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { RootStackScreenProps } from "../types";
import ReceiptModalContent from "../features/receipts/components/list/ReceiptModalContent";

export default function ReceiptModalScreen({
  navigation,
  route,
}: RootStackScreenProps<"ReceiptModal">) {
  const data = route.params.data;

  return (
    <BlurView intensity={20} style={styles.container}>
      <ReceiptModalContent data={data} closeModal={() => navigation.goBack()} />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
