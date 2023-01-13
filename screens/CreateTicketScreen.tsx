import useCustomColors from '../hooks/useCustomColors';
import { Pressable, View, TextInput, Text, Keyboard, StyleSheet } from 'react-native';
import { useState } from 'react';
import TicketForm from '../components/organisms/TicketForm';

export default function CreateTicketScreen() {
	const t = useCustomColors();
	const [value, setValue] = useState<string>('');
	const [contentValue, setContentValue] = useState<string>('');
	const [errMessage, setErrMessage] = useState<string | null>(null);
	const [contentErrMessage, setContentErrMessage] = useState<string | null>(null);
	const maxTitleInputLength = 100;
	const maxContentInputLength = 400;

	return (
		<View style={[styles.container, { backgroundColor: t.bgPrimaryGrouped }]}>
			<TicketForm
				titleInputProps={{
					value: value,
					setValue: setValue,
					maxTitleInputLength: maxTitleInputLength,
					errMessage: errMessage,
				}}
				contentInputProps={{
					value: contentValue,
					setValue: setContentValue,
					maxContentInputLength: maxContentInputLength,
					errMessage: contentErrMessage,
				}}
				priorityPickerProps={{
					pickedState: 'normal',
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		paddingHorizontal: 12,
		borderRadius: 8,
		fontSize: 16,
		paddingLeft: 34,
	},
});
