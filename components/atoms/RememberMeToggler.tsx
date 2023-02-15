import { Pressable, StyleSheet, Text, View } from "react-native";
import useCustomColors from "../../hooks/useCustomColors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface IRememberMeToggler {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const RememberMeToggler = (props: IRememberMeToggler) => {
  const pressHandler = () => {
    props.setChecked((prevChecked) => !prevChecked);
  };
  const t = useCustomColors();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pressHandler} style={styles.checkboxView}>
        {props.checked ? (
          // <Ionicons name="checkbox" size={18} color={t.tint} />
          <View
            style={[
              styles.iconWrapper,
              { backgroundColor: t.tint, borderColor: t.tint },
            ]}
          >
            <Ionicons name="checkmark" size={13} color="#ffffff" />
          </View>
        ) : (
          <View
            style={[styles.iconWrapper, { borderColor: t.labelTertiary }]}
          />
        )}
      </TouchableOpacity>
      <Pressable onPress={pressHandler} style={styles.textContainer}>
        <Text style={[styles.text, { color: t.labelSecondary }]}>
          Zapamiętaj mnie
        </Text>
      </Pressable>
    </View>
  );
};

export default RememberMeToggler;

const styles = StyleSheet.create({
  inactive: {},
  iconWrapper: {
    width: 16,
    height: 16,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  textContainer: {
    height: "90%",
    justifyContent: "center",
  },
  checkboxView: {
    padding: 7,
    width: 32,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingTop: 15,
    paddingLeft: 4,
  },
  text: {
    fontWeight: "300",
    fontSize: 13,
  },
});
