import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { maxPasswordFieldLength } from '../../constants/Validation';
import { CustomTheme } from '../../constants/Colors';

interface PasswordInputFieldProps {
	onChangeText: (text: string) => void;
	onFocus: () => void;
	onBlur: () => void;
	onLockPress: () => void;
	logoColor: string;
	isPasswordHidden: boolean;
	errorMessage: string | null;
	t: CustomTheme;
	value: string;
}

export default function PasswordInputField(props: PasswordInputFieldProps) {
	const t = props.t;

	return (
		<>
			<Text style={[styles.inputLabel, { color: t.labelSecondary }]}>Hasło</Text>
			<View style={{ justifyContent: 'center' }}>
				<TouchableOpacity onPress={props.onLockPress} style={styles.logo}>
					<Ionicons
						name={props.isPasswordHidden ? 'lock-closed-outline' : 'lock-open-outline'}
						size={18}
						color={props.logoColor}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={props.onLockPress} style={styles.eyeButton}>
					<Ionicons
						name={props.isPasswordHidden ? 'eye-off' : 'eye'}
						size={18}
						color={props.isPasswordHidden ? t.gray2 : t.tint}
					/>
				</TouchableOpacity>

				<TextInput
					value={props.value}
					autoCapitalize="none"
					autoComplete="off"
					autoCorrect={false}
					secureTextEntry={props.isPasswordHidden}
					maxLength={maxPasswordFieldLength}
					onFocus={props.onFocus}
					selectionColor={t.tint}
					onBlur={props.onBlur}
					onChangeText={props.onChangeText}
					style={[
						styles.loginInput,
						{ backgroundColor: t.fillQuaternary, color: t.text },
					]}
				/>
			</View>
			{props.errorMessage && (
				<View style={styles.errorView}>
					<Ionicons name="warning-outline" color={t.negativeLabel} size={13} />
					<Text style={[styles.errorMessage, { color: t.negativeLabel }]}>
						{props.errorMessage}
					</Text>
				</View>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	eyeButton: {
		position: 'absolute',
		right: 5,
		zIndex: 10,
		padding: 5,
	},
	errorView: {
		flexDirection: 'row',
		paddingLeft: 10,
		alignItems: 'center',
		paddingTop: 3,
	},
	errorMessage: {
		fontSize: 11,
		paddingLeft: 3,
	},
	logo: {
		position: 'absolute',
		left: 5,
		zIndex: 10,
		padding: 5,
	},
	inputLabel: {
		marginTop: 10,
		paddingLeft: 8,
		paddingBottom: 2,
		fontWeight: '300',
	},
	loginInput: {
		paddingVertical: 7,
		borderRadius: 8,
		fontSize: 16,
		paddingHorizontal: 34,
	},
});
