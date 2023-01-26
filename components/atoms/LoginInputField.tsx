import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { maxLoginFieldLength } from "../../constants/Validation";
import { CustomTheme } from "../../constants/Colors";

export interface LoginInputFieldProps {
  onLoginChangeText: (text: string) => void;
  onLoginFocus: () => void;
  onLoginBlur: () => void;
  loginLogoColor: string;
  loginErrorMessage: string | null;
  t: CustomTheme;
  loginText: string;
}

export default function LoginInputField(props: LoginInputFieldProps) {
  const t = props.t;

  return (
    <>
      <Text style={[styles.inputLabel, { color: t.labelSecondary }]}>
        Adres e-mail
      </Text>
      <View style={{ justifyContent: "center" }}>
        <Ionicons
          style={styles.logo}
          name="person-outline"
          size={18}
          color={props.loginLogoColor}
        />
        <TextInput
          value={props.loginText}
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={maxLoginFieldLength}
          onFocus={props.onLoginFocus}
          onBlur={props.onLoginBlur}
          onChangeText={props.onLoginChangeText}
          selectionColor={t.tint}
          style={[
            styles.loginInput,
            { backgroundColor: t.fillQuaternary, color: t.text },
          ]}
        />
      </View>
      {props.loginErrorMessage && (
        <View style={styles.errorView}>
          <Ionicons name="warning-outline" color={t.negativeLabel} size={13} />
          <Text style={[styles.errorMessage, { color: t.negativeLabel }]}>
            {props.loginErrorMessage}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  errorView: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    paddingTop: 3,
  },
  errorMessage: {
    fontSize: 11,
    paddingLeft: 3,
  },
  logo: {
    position: "absolute",
    left: 5,
    padding: 5,
  },
  inputLabel: {
    marginTop: 10,
    paddingLeft: 8,
    paddingBottom: 2,
    fontWeight: "300",
  },
  loginInput: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 34,
  },
});
