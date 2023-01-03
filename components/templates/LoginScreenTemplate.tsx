import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Layout from '../../constants/Layout';
import { CustomTheme, blueGradientColors } from '../../constants/Colors';
import WelcomeToItcard from '../atoms/WelcomeToItcard';
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

	return (
		<View style={styles.mainView}>
			<ScrollView style={[styles.scroll, { height: windowHeight }]}>
				<LinearGradient style={styles.grad} colors={blueGradientColors}>
					<WelcomeToItcard />
				</LinearGradient>
				<LinearGradient
					style={[styles.container, { height: windowHeight }]}
					colors={[t.bgPrimary, t.bgSecondaryGrouped]}
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
				</LinearGradient>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	mainView: {
		height: '100%',
	},
	container: {
		paddingTop: 15,
		alignItems: 'center',
		borderRadius: 18,
	},
	scroll: {
		paddingTop: 215,
	},
	grad: {
		position: 'absolute',
		width: '100%',
		height: 950,
		top: -880,
		paddingBottom: 80,
		paddingHorizontal: 38,
		justifyContent: 'flex-end',
	},
});
