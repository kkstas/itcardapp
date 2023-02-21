import { View, StyleSheet, Text } from "react-native";
import SmallButtonWithIcon from "../common/SmallButtonWithIcon";
import useCustomColors from "../../hooks/useCustomColors";

interface InfoModalContentProps {
  appTitle: string;
  appDescription: string;
  closeModal: () => void;
  bottomInfo: string;
}

export default function InfoModalContent({
  appTitle,
  appDescription,
  closeModal,
  bottomInfo,
}: InfoModalContentProps) {
  const t = useCustomColors();
  return (
    <View style={[styles.container, { backgroundColor: t.bgPrimary }]}>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 12, color: t.text }}>Opis modułu</Text>
        <Text style={[styles.appTitle, { color: t.text }]}>{appTitle}</Text>

        <Text style={[styles.appDescription, { color: t.labelPrimary }]}>
          {appDescription}
        </Text>
        <View style={[styles.separator, { borderBottomColor: t.text }]} />
        <Text style={{ color: t.labelPrimary, fontWeight: "600" }}>
          {bottomInfo}
        </Text>
      </View>
      <SmallButtonWithIcon text="Powrót" onPress={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
    paddingTop: 5,
  },
  textContainer: {
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  appTitle: {
    fontSize: 30,
    paddingBottom: 18,
  },
  appDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  container: {
    width: "90%",
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
});
