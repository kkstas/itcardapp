import { TouchableOpacity, Text, StyleSheet } from "react-native";

export interface ISubmitButton {
  onPress: () => void;
  submitText: string;
}

export const SubmitButton = (props: ISubmitButton) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.submitText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 8,
    width: "100%",
    height: 35,
    backgroundColor: "#39405a",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
