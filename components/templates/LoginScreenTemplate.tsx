import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Layout from "../../constants/Layout";
import {
  blueGradientColors,
  blueLightGradientColors,
} from "../../constants/Colors";
import LoginBox, { LoginBoxProps } from "../organisms/LoginBox";

export default function LoginScreenTemplate(props: LoginBoxProps) {
  const windowHeight = Layout.window.height;
  const t = props.t;
  // const bottomGradientColors =
  //   t.theme === 'dark'
  //     ? [t.bgPrimaryGrouped, t.bgSecondaryGrouped]
  //     : [t.fillSecondary, t.fillQuaternary];

  const bottomGradientColors =
    t.theme === "dark"
      ? [t.bgPrimary, t.bgSecondary]
      : // : [t.fillPrimary, t.labelQuaternary];

        [t.fillPrimary, t.labelQuaternary];

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-200}
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <ScrollView
        style={{
          height: windowHeight,
          paddingTop: windowHeight / 2.5,
        }}
        keyboardShouldPersistTaps={"handled"}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          style={[styles.grad, { height: windowHeight, top: -windowHeight }]}
          colors={
            t.theme === "dark" ? blueGradientColors : blueLightGradientColors
          }
        ></LinearGradient>
        <LinearGradient
          style={[{ height: windowHeight }]}
          colors={bottomGradientColors}
        ></LinearGradient>
        <View
          style={[
            styles.loginBoxView,
            {
              top: -windowHeight / 6,
            },
          ]}
        >
          <LoginBox
            onLoginChangeText={props.onLoginChangeText}
            onPasswordChangeText={props.onPasswordChangeText}
            loginErrorMessage={props.loginErrorMessage}
            passwordErrorMessage={props.passwordErrorMessage}
            onLoginFocus={props.onLoginFocus}
            onLoginBlur={props.onLoginBlur}
            loginLogoColor={props.loginLogoColor}
            onPasswordFocus={props.onPasswordFocus}
            onPasswordBlur={props.onPasswordBlur}
            passwordLogoColor={props.passwordLogoColor}
            onLockPress={props.onLockPress}
            isPasswordHidden={props.isPasswordHidden}
            submitAction={props.submitAction}
            t={t}
            loginText={props.loginText}
            passwordText={props.passwordText}
            checked={props.checked}
            setChecked={props.setChecked}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginBoxView: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  grad: {
    position: "absolute",
    width: "100%",
    paddingBottom: 80,
    paddingHorizontal: 38,
  },
});
