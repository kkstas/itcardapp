import { RootStackScreenProps } from '../types';
import LoginScreenTemplate from '../components/templates/LoginScreenTemplate';
import { useState } from 'react';
import useCustomColors from '../hooks/useCustomColors';

export default function LoginScreen({ navigation }: RootStackScreenProps<'LoginScreen'>) {
	const t = useCustomColors();
	const [loginText, setLoginText] = useState('');
	const [passwordText, setPasswordText] = useState('');
	const [isPasswordHidden, setIsPasswordHidden] = useState(true);
	const logoUnfocusedColor = t.labelQuaternary;
	const logoFocusedColor = t.tint;
	const [loginLogoColor, setLoginLogoColor] = useState(logoUnfocusedColor);
	const [passwLogoColor, setPasswLogoColor] = useState(logoUnfocusedColor);
	const [loginError, setLoginError] = useState<string | null>(null);
	const [passwordError, setPasswordError] = useState<string | null>(null);

	function submitHandler() {
		if (loginText.length > 0 && passwordText.length > 0) {
			// setLoginText('');
			// setPasswordText('');
			// setPasswordError(null);
			// setLoginError(null);
			navigation.replace('Root');
		} else if (loginText.length === 0 && passwordText.length > 0) {
			setPasswordError(null);
			setLoginError('Login lub adres e-mail nie został podany!');
		} else if (loginText.length > 0 && passwordText.length === 0) {
			setLoginError(null);
			setPasswordError('Hasło nie zostało podane!');
		} else {
			setPasswordError('Hasło nie zostało podane!');
			setLoginError('Login lub adres e-mail nie został podany!');
		}
	}

	return (
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
	);
}
