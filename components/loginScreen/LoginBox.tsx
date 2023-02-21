import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginInputField from "./LoginInputField";
import PasswordInputField from "./PasswordInputField";
import WelcomeToItcard from "../common/WelcomeToItcard";
import { LoginInputFieldProps } from "./LoginInputField";
import { PasswordInputFieldProps } from "./PasswordInputField";
import Animated, { FadeInDown } from "react-native-reanimated";
import RememberMeToggler, {
  IRememberMeToggler,
} from "./RememberMeToggler";

export interface LoginBoxProps
  extends LoginInputFieldProps,
  PasswordInputFieldProps,
  IRememberMeToggler {
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
      <View style={styles.wrapper}>
        <LinearGradient
          style={styles.boxGrad}
          colors={
            t.theme === "light"
              ? [t.bgPrimary, t.bgTertiaryGrouped]
              : [t.bgTertiary, t.bgPrimary]
          }
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
            <RememberMeToggler
              checked={props.checked}
              setChecked={props.setChecked}
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(520)}>
            <TouchableOpacity onPressIn={props.submitAction}>
              <LinearGradient
                colors={[t.itcGranatSecondary, t.itcGranatSecondary]}
                // colors={['rgb(121, 150, 174)', 'rgb(99, 116, 169)']}
                style={styles.loginButton}
              >
                <Text style={[styles.loginBtnText, { color: "white" }]}>
                  Zaloguj
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
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
    marginTop: 5,
  },
  mainText: {
    fontSize: 48,
    paddingLeft: 8,
    fontWeight: "200",
  },
});
