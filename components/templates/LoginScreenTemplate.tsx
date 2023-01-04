import {
	ScrollView,
	StyleSheet,
	KeyboardAvoidingView,
	View,
	Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Layout from '../../constants/Layout';
import { CustomTheme, blueGradientColors } from '../../constants/Colors';
import LoginBox from '../organisms/LoginBox';

interface LoginScreenTemplateProps {
	onLoginChangeText: (text: string) => void;
	onPasswordChangeText: (text: string) => void;
	onLoginFocus: () => void;
	onPasswordFocus: () => void;
	onLoginBlur: () => void;
	onPasswordBlur: () => void;
	onLockPress: () => void;
	loginLogoColor: string;
	passwLogoColor: string;
	isPasswordHidden: boolean;
	submitAction: () => void;
	t: CustomTheme;
	loginErrorMessage: string | null;
	passwordErrorMessage: string | null;
	loginText: string;
	passwordText: string;
}

/**
 *
 * @param loginErrorMessage - error message for login input field (null if no error)
 * @param passwordErrorMessage - error message for password input field (null if no error)
 * @param onLoginFocus - login field onFocus handler
 * @param onLoginBlur - login field onBlur handler
 * @param onPasswordFocus - password field onFocus handler
 * @param onPasswordBlur - password field onBlur handler
 * @param onLockPress - password field lock button pressed handler
 * @param loginLogoColor - login logo color string
 * @param passwLogoColor - password logo color string
 * @param isPasswordHidden - should password entry by secured with '***'
 * @param submitAction - submit handler
 * @param onLoginChangeText - login change text handler
 * @param onPasswordChangeText - password change text handler
 * @param t - theme colors
 * @param loginText - login text value
 * @param passwordText - password text value
 * @returns JSX of login screen template
 */
export default function LoginScreenTemplate(props: LoginScreenTemplateProps) {
	const windowHeight = Layout.window.height;
	const t = props.t;
	const bottomGradientColors =
		t.theme === 'dark'
			? [t.bgPrimaryGrouped, t.bgSecondaryGrouped]
			: [t.fillSecondary, t.fillQuaternary];

	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={-200}
			behavior={Platform.OS === 'ios' ? 'position' : 'height'}
		>
			<ScrollView
				style={{ height: windowHeight, paddingTop: windowHeight / 2.5 }}
				showsVerticalScrollIndicator={false}
			>
				<LinearGradient
					style={[styles.grad, { height: windowHeight, top: -windowHeight }]}
					colors={blueGradientColors}
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
						passwLogoColor={props.passwLogoColor}
						onLockPress={props.onLockPress}
						isPasswordHidden={props.isPasswordHidden}
						submitAction={props.submitAction}
						t={t}
						loginText={props.loginText}
						passwordText={props.passwordText}
					/>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	loginBoxView: {
		position: 'absolute',
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100%',
	},
	grad: {
		position: 'absolute',
		width: '100%',
		paddingBottom: 80,
		paddingHorizontal: 38,
	},
});
