import useCustomColors from '../hooks/useCustomColors';
import { Pressable, View, TextInput, Text, Keyboard, StyleSheet } from 'react-native';
import { useState } from 'react';
import TicketForm from '../components/organisms/TicketForm';
import { useAppSelector } from '../hooks/reduxHooks';
import { addNewTicket } from '../hooks/asyncStorage';
import { useNavigation } from '@react-navigation/native';
import { PriorityPickerProps } from '../components/atoms/PriorityPicker';

export default function CreateTicketScreen() {
	const t = useCustomColors();
	const [value, setValue] = useState<string>('');
	const [contentValue, setContentValue] = useState<string>('');
	const [errMessage, setErrMessage] = useState<string | null>(null);
	const [contentErrMessage, setContentErrMessage] = useState<string | null>(null);
	const [pickedPriority, setPickedPriority] = useState<'normal' | 'high' | 'critical'>(
		'normal'
	);
	const maxTitleInputLength = 100;
	const maxContentInputLength = 400;

	const { media, thumbnailUri } = useAppSelector((state) => state.ticketMedia);
	const navigation = useNavigation();
	function submitTicketToAsyncStorage() {
		if (value && contentValue) {
			const data = {
				id: Date.now(),
				title: value,
				priority: pickedPriority,
				content: contentValue,
				media: media,
				thumbnailUri: thumbnailUri,
			};
			addNewTicket(data);
			navigation.goBack();
		} else if (!value && contentValue) {
			setErrMessage('Uzupełnij tytuł');
			setContentErrMessage('');
		} else if (value && !contentValue) {
			setErrMessage('');
			setContentErrMessage('Uzupełnij treśc');
		} else {
			setErrMessage('Uzupełnij tytuł');
			setContentErrMessage('Uzupelnij tresc');
		}
	}

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
					pickedState: pickedPriority,
					setNormalPriority: () => setPickedPriority('normal'),
					setHighPriority: () => setPickedPriority('high'),
					setCriticalPriority: () => setPickedPriority('critical'),
				}}
				submitTicket={submitTicketToAsyncStorage}
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
