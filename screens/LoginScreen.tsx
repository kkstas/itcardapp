import { RootStackScreenProps } from "../types";
import LoginScreenTemplate from "../components/templates/LoginScreenTemplate";
import { useState } from "react";
import useCustomColors from "../hooks/useCustomColors";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { logIn } from "../store/slices/userInfo";
import { logInAsync } from "../util/auth";
import TestSplashElement from "../components/molecules/TestSplashElement";
import { Keyboard } from "react-native";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"LoginScreen">) {
  const t = useCustomColors();
  const [loginText, setLoginText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const logoUnfocusedColor = t.gray2;
  const logoFocusedColor = t.tint;
  const [loginLogoColor, setLoginLogoColor] = useState(logoUnfocusedColor);
  const [passwLogoColor, setPasswLogoColor] = useState(logoUnfocusedColor);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useAppDispatch();

  async function submitHandler() {
    Keyboard.dismiss();
    if (loginText.length >= 6 && passwordText.length >= 6) {
      setIsFetching(true);
      try {
        const userData = await logInAsync(loginText, passwordText);
        if (userData && userData.firstName && userData.lastName) {
          dispatch(logIn(userData));
        } else {
          setPasswordError(
            "Konto jest niepoprawnie skonfigurowane. Skontaktuj się z administracją."
          );
        }
      } catch (error) {
        setPasswordError("Dane logowania są nieprawidłowe.");
        setLoginError(null);
      }
      setIsFetching(false);
    } else if (loginText.length === 0 && passwordText.length === 0) {
      dispatch(
        logIn({
          email: "j.testowy@itcard.pl",
          jobTitle: "Starszy Tester Wirtualny ds. Siedzenia w Aplikacji",
          firstName: "Jan",
          lastName: "Testowy",
        })
      );
    } else if (loginText.length < 6 && passwordText.length > 6) {
      setPasswordError(null);
      setLoginError("Adres e-mail jest za krótki!");
    } else if (loginText.length > 6 && passwordText.length < 6) {
      setLoginError(null);
      setPasswordError("Hasło jest za krótkie!");
    } else {
      setPasswordError("Hasło jest za krótkie!");
      setLoginError("Adres e-mail jest za krótki!");
    }
    setLoginText("");
    setPasswordText("");
  }

  return (
    <>
      {isFetching && <TestSplashElement />}
      <LoginScreenTemplate
        loginText={loginText}
        passwordText={passwordText}
        onLoginChangeText={(text: string) => setLoginText(text)}
        onPasswordChangeText={(text: string) => setPasswordText(text)}
        submitAction={submitHandler}
        onLoginFocus={() => setLoginLogoColor(logoFocusedColor)}
        onLoginBlur={() => setLoginLogoColor(logoUnfocusedColor)}
        loginLogoColor={loginLogoColor}
        onPasswordFocus={() => setPasswLogoColor(logoFocusedColor)}
        onPasswordBlur={() => setPasswLogoColor(logoUnfocusedColor)}
        passwLogoColor={passwLogoColor}
        onLockPress={() => setIsPasswordHidden((prev) => !prev)}
        isPasswordHidden={isPasswordHidden}
        t={t}
        loginErrorMessage={loginError}
        passwordErrorMessage={passwordError}
      />
    </>
  );
}
