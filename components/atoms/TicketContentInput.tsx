import useCustomColors from '../../hooks/useCustomColors';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export interface TicketContentInputProps {
	value: string;
	setValue: (text: string) => void;
	maxContentInputLength: number;
	errMessage: string | null;
}

export default function TicketContentInput({
	value,
	errMessage,
	setValue,
	maxContentInputLength,
}: TicketContentInputProps) {
	const t = useCustomColors();
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View>
			<Text style={[styles.inputLabel, { color: isFocused ? t.tint : t.labelSecondary }]}>
				Opis zgłoszenia
			</Text>
			<View style={styles.contentView}>
				<TextInput
					value={value}
					autoComplete="off"
					autoCapitalize="sentences"
					autoCorrect={false}
					multiline={true}
					maxLength={maxContentInputLength}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					selectionColor={t.tint}
					onChangeText={(x) => setValue(x)}
					style={[styles.contentInput, { backgroundColor: t.textInput, color: t.text }]}
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
	contentView: {
		justifyContent: 'flex-start',
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
	inputLabel: {
		paddingLeft: 8,
		paddingBottom: 2,
		fontWeight: '400',
		fontSize: 18,
	},
	contentInput: {
		paddingVertical: 7,
		paddingHorizontal: 12,
		borderRadius: 8,
		fontSize: 16,
		textAlignVertical: 'top',
		minHeight: 100,
	},
});
