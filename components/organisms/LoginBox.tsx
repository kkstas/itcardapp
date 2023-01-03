import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginInputField from '../atoms/LoginInputField';
import PasswordInputField from '../atoms/PasswordInputField';
import { CustomTheme } from '../../constants/Colors';
import WelcomeToItcard from '../atoms/WelcomeToItcard';

interface LoginBoxProps {
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
 * @param onLoginChangeText - login change text handler
 * @param onPasswordChangeText - password change text handler*
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
 * @param t - color theme from screen
 * @param loginText - login text value
 * @param passwordText - password text value
 * @returns JSX component of whole styled login form
 */
export default function LoginBox(props: LoginBoxProps) {
	const t = props.t;
	return (
		<>
			<View style={styles.welcomeView}>
				<WelcomeToItcard />
			</View>
			<LinearGradient style={styles.boxGrad} colors={[t.bgSecondary, t.gray6]}>
				<Text style={[styles.mainText, { color: t.labelTertiary }]}>Logowanie</Text>
				<View style={[styles.separator, { borderBottomColor: t.separator }]}></View>

				<LoginInputField
					onFocus={props.onLoginFocus}
					logoColor={props.loginLogoColor}
					onBlur={props.onLoginBlur}
					t={t}
					errorMessage={props.loginErrorMessage}
					onChangeText={props.onLoginChangeText}
					value={props.loginText}
				/>
				<PasswordInputField
					onFocus={props.onPasswordFocus}
					onBlur={props.onPasswordBlur}
					logoColor={props.passwLogoColor}
					onLockPress={props.onLockPress}
					isPasswordHidden={props.isPasswordHidden}
					t={t}
					errorMessage={props.passwordErrorMessage}
					onChangeText={props.onPasswordChangeText}
					value={props.passwordText}
				/>
				<View>
					<TouchableOpacity onPress={props.submitAction}>
						<LinearGradient
							colors={['rgb(121, 150, 174)', 'rgb(99, 116, 169)']}
							style={styles.loginButton}
						>
							<Text style={[styles.loginBtnText, { color: 'white' }]}>Zaloguj</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	welcomeView: {
		width: '90%',
		paddingLeft: 30,
	},
	boxGrad: {
		width: '90%',
		paddingHorizontal: 20,
		paddingVertical: 40,
		borderRadius: 12,
		marginTop: 10,
	},
	separator: {
		top: -5,
		marginLeft: 8,
		width: '75%',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginBottom: 5,
	},
	loginBtnText: {
		fontSize: 17,
		fontWeight: '400',
	},
	loginButton: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 8,
		width: '100%',
		borderRadius: 10,
		marginTop: 35,
	},
	mainText: {
		fontSize: 48,
		paddingLeft: 8,
		fontWeight: '200',
	},
});
