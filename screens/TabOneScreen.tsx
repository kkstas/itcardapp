import { StyleSheet, View } from "react-native";
import TabOneList from "../components/tabOneScreen/TabOneList";
import useCustomColors from "../hooks/useCustomColors";

export default function TabOneScreen() {
  const t = useCustomColors();
  return (
    <View style={[styles.container, { backgroundColor: t.bgPrimary }]}>
      <TabOneList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
