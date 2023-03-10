import LoginScreenTemplate from '../components/loginScreen/LoginScreenTemplate';
import { useEffect, useState } from 'react';
import useCustomColors from '../hooks/useCustomColors';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import {
  getTicketsThunk,
  getReceiptsThunk,
} from '../store/slices/documentsData';
import { logIn } from '../store/slices/userInfo';
import { logInAsync } from '../util/auth';
import TestSplashElement from '../components/loginScreen/TestSplashElement';
import { rememberUserData, readUserData } from '../util/rememberMe';

export default function LoginScreen() {
  const t = useCustomColors();
  const [loginText, setLoginText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const logoUnfocusedColor = t.gray2;
  const logoFocusedColor = t.tint;
  const [loginLogoColor, setLoginLogoColor] = useState(logoUnfocusedColor);
  const [passwLogoColor, setPasswLogoColor] = useState(logoUnfocusedColor);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [checked, setChecked] = useState(false);

  const dataState = useAppSelector((state) => state.documentsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataState.status === 'idle') {
      dispatch(getTicketsThunk());
      dispatch(getReceiptsThunk());
    }
  }, [dataState.status, dispatch]);

  const checkIfRemembered = async () => {
    setIsFetching(true);
    const result = await readUserData();
    if (
      result &&
      result.email &&
      result.jobTitle &&
      result.lastName &&
      result.firstName
    ) {
      dispatch(logIn(result));
    }
    setIsFetching(false);
  };

  useEffect(() => {
    checkIfRemembered();
  }, []);

  async function submitHandler() {
    if (loginText.length >= 6 && passwordText.length >= 6) {
      setIsFetching(true);
      try {
        const userData = await logInAsync(loginText, passwordText);
        if (userData && userData.firstName && userData.lastName) {
          rememberUserData(userData);
          dispatch(logIn(userData));
        } else {
          setPasswordError(
            'Konto jest niepoprawnie skonfigurowane. Skontaktuj si?? z administracj??.'
          );
        }
      } catch (error) {
        setPasswordError('Dane logowania s?? nieprawid??owe.');
        setLoginError(null);
      }
      setIsFetching(false);
      // } else if (loginText.length === 0 && passwordText.length === 0) {
      //   dispatch(
      //     logIn({
      //       email: 'j.testowy@itcard.pl',
      //       jobTitle: 'Starszy Tester Wirtualny ds. Siedzenia w Aplikacji',
      //       firstName: 'Jan',
      //       lastName: 'Testowy',
      //     })
      //   );
    } else if (loginText.length < 6 && passwordText.length > 6) {
      setPasswordError(null);
      setLoginError('Adres e-mail jest za kr??tki!');
    } else if (loginText.length > 6 && passwordText.length < 6) {
      setLoginError(null);
      setPasswordError('Has??o jest za kr??tkie!');
    } else {
      setPasswordError('Has??o jest za kr??tkie!');
      setLoginError('Adres e-mail jest za kr??tki!');
    }
    setLoginText('');
    setPasswordText('');
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
        passwordLogoColor={passwLogoColor}
        onLockPress={() => setIsPasswordHidden((prev) => !prev)}
        isPasswordHidden={isPasswordHidden}
        t={t}
        loginErrorMessage={loginError}
        passwordErrorMessage={passwordError}
        checked={checked}
        setChecked={setChecked}
      />
    </>
  );
}
