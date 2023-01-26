import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginInputField from "../atoms/LoginInputField";
import PasswordInputField from "../atoms/PasswordInputField";
import WelcomeToItcard from "../atoms/WelcomeToItcard";
import { LoginInputFieldProps } from "../atoms/LoginInputField";
import { PasswordInputFieldProps } from "../atoms/PasswordInputField";
import Animated, { FadeInDown } from "react-native-reanimated";

export interface LoginBoxProps
  extends LoginInputFieldProps,
    PasswordInputFieldProps {
  submitAction: () => void;
}
export default function LoginBox(props: LoginBoxProps) {
  const t = props.t;
  return (
    <>
      <Animated.View
        entering={FadeInDown.delay(100)}
        style={styles.welcomeView}
      >
        <WelcomeToItcard />
      </Animated.View>
      <LinearGradient
        style={styles.boxGrad}
        colors={[t.bgSecondary, t.bgTertiary]}
      >
        <Animated.Text
          entering={FadeInDown.delay(220)}
          style={[styles.mainText, { color: t.labelTertiary }]}
        >
          Logowanie
        </Animated.Text>
        <View
          style={[styles.separator, { borderBottomColor: t.separator }]}
        ></View>
        <Animated.View entering={FadeInDown.delay(320)}>
          <LoginInputField
            onLoginFocus={props.onLoginFocus}
            loginLogoColor={props.loginLogoColor}
            onLoginBlur={props.onLoginBlur}
            t={t}
            loginErrorMessage={props.loginErrorMessage}
            onLoginChangeText={props.onLoginChangeText}
            loginText={props.loginText}
          />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(420)}>
          <PasswordInputField
            onPasswordFocus={props.onPasswordFocus}
            onPasswordBlur={props.onPasswordBlur}
            passwordLogoColor={props.passwordLogoColor}
            onLockPress={props.onLockPress}
            isPasswordHidden={props.isPasswordHidden}
            t={t}
            passwordErrorMessage={props.passwordErrorMessage}
            onPasswordChangeText={props.onPasswordChangeText}
            passwordText={props.passwordText}
          />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(520)}>
          <TouchableOpacity onPress={props.submitAction}>
            <LinearGradient
              colors={["rgb(121, 150, 174)", "rgb(99, 116, 169)"]}
              style={styles.loginButton}
            >
              <Text style={[styles.loginBtnText, { color: "white" }]}>
                Zaloguj
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  welcomeView: {
    width: "90%",
    paddingLeft: 30,
  },
  boxGrad: {
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 12,
    marginTop: 10,
  },
  separator: {
    top: -5,
    marginLeft: 8,
    width: "75%",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 5,
  },
  loginBtnText: {
    fontSize: 17,
    fontWeight: "400",
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    width: "100%",
    borderRadius: 10,
    marginTop: 18,
  },
  mainText: {
    fontSize: 48,
    paddingLeft: 8,
    fontWeight: "200",
  },
});
