import useCustomColors from '../hooks/useCustomColors';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import TicketForm from '../components/organisms/TicketForm';
import { useAppSelector } from '../hooks/reduxHooks';
import { TicketDataType, addNewTicket } from '../hooks/asyncStorage';
import { useAppDispatch } from '../hooks/reduxHooks';
import { clearAll } from '../store/slices/ticketMedia';
import { postTicketData } from '../util/ticketData';
import { TabTwoMainStackScreenProps } from '../types';

export default function CreateTicketScreen({
	navigation,
	route,
}: TabTwoMainStackScreenProps<'CreateTicketScreen'>) {
	const t = useCustomColors();
	const [value, setValue] = useState<string>('');
	const [contentValue, setContentValue] = useState<string>('');
	const [errMessage, setErrMessage] = useState<string | null>(null);
	const [contentErrMessage, setContentErrMessage] = useState<string | null>(null);
	const [pickedPriority, setPickedPriority] = useState<'normal' | 'high' | 'critical'>(
		'normal'
	);
	const [locationUri, setLocationUri] = useState<string | null>(null);
	const maxTitleInputLength = 100;
	const maxContentInputLength = 800;

	const { media, thumbnailUri } = useAppSelector((state) => state.ticketMedia);
	const { email, firstName, lastName, jobTitle } = useAppSelector(
		(state) => state.userInfo
	);

	const dispatch = useAppDispatch();

	// sends data to AsyncStorage (addNewTicket function)
	// AND sends POST request to database (postTicketData function)
	function submitTicketToAsyncStorage() {
		// if title and content of the form is not empty
		if (value && contentValue) {
			const data: TicketDataType = {
				id: Date.now(),
				title: value,
				priority: pickedPriority,
				content: contentValue,
				media: media,
				thumbnailUri: thumbnailUri,
				locationUri: locationUri,
			};
			// add to AsyncStorage
			addNewTicket(data);
			// clear media and thumbnail data from redux
			dispatch(clearAll());
			// send POST request to database
			postTicketData({
				...data,
				email: email,
				firstName: firstName,
				lastName: lastName,
				jobTitle: jobTitle,
			});
			navigation.goBack();
		} else if (!value && contentValue) {
			setErrMessage('Uzupełnij tytuł zgłoszenia');
			setContentErrMessage('');
		} else if (value && !contentValue) {
			setErrMessage('');
			setContentErrMessage('Uzupełnij treść zgłoszenia');
		} else {
			setErrMessage('Uzupełnij tytuł zgłoszenia');
			setContentErrMessage('Uzupełnij treść zgłoszenia');
		}
	}

	const goToMapScreen = (lat: number, lng: number) => {
		navigation.navigate('MapScreen', { lat: lat, lng: lng });
	};

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
				goToMapScreen={goToMapScreen}
				pickedLocationParams={
					route.params
						? { lat: route.params.pickedLat, lng: route.params.pickedLng }
						: null
				}
				setLocationUri={setLocationUri}
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
