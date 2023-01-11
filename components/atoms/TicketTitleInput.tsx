import useCustomColors from '../../hooks/useCustomColors';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export interface TicketTitleInputProps {
	value: string;
	setValue: (text: string) => void;
	maxTitleInputLength: number;
	errMessage: string | null;
}

export default function TicketTitleInput({
	value,
	errMessage,
	setValue,
	maxTitleInputLength,
}: TicketTitleInputProps) {
	const t = useCustomColors();
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View>
			<Text
				style={[
					styles.inputLabel,
					{ color: isFocused ? t.tintTapState : t.labelSecondary },
				]}
			>
				Tytuł zgłoszenia
			</Text>
			<View style={{ justifyContent: 'center' }}>
				<TextInput
					value={value}
					autoComplete="off"
					autoCapitalize="sentences"
					autoCorrect={false}
					maxLength={maxTitleInputLength}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onChangeText={(x) => setValue(x)}
					style={[
						styles.loginInput,
						{
							backgroundColor: t.textInput,
							color: t.text,
						},
					]}
				/>
			</View>
			{errMessage && (
				<View style={styles.errorView}>
					<Ionicons name="warning-outline" color={t.negativeLabel} size={13} />
					<Text style={[styles.errorMessage, { color: t.negativeLabel }]}>
						{errMessage}
					</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
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
		padding: 5,
	},
	inputLabel: {
		paddingLeft: 8,
		paddingBottom: 2,
		fontWeight: '400',
		fontSize: 18,
	},
	loginInput: {
		paddingVertical: 7,
		paddingHorizontal: 12,
		borderRadius: 8,
		fontSize: 16,
		textAlignVertical: 'top',
	},
});
