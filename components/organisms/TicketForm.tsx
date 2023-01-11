import { View, StyleSheet } from 'react-native';
import TicketTitleInput, { TicketTitleInputProps } from '../atoms/TicketTitleInput';
import TicketContentInput, { TicketContentInputProps } from '../atoms/TicketContentInput';
import PriorityPicker, { PriorityPickerProps } from '../atoms/PriorityPicker';
import useCustomColors from '../../hooks/useCustomColors';

interface TicketFormProps {
	titleInputProps: TicketTitleInputProps;
	contentInputProps: TicketContentInputProps;
	priorityPickerProps: PriorityPickerProps;
}

export default function TicketForm(props: TicketFormProps) {
	return (
		<View style={styles.container}>
			<View style={styles.ticketTitleView}>
				<TicketTitleInput
					value={props.titleInputProps.value}
					setValue={props.titleInputProps.setValue}
					maxTitleInputLength={props.titleInputProps.maxTitleInputLength}
					errMessage={props.titleInputProps.errMessage}
				/>
			</View>
			<View style={styles.ticketContentView}>
				<TicketContentInput
					value={props.contentInputProps.value}
					setValue={props.contentInputProps.setValue}
					maxContentInputLength={props.contentInputProps.maxContentInputLength}
					errMessage={props.contentInputProps.errMessage}
				/>
			</View>
			<View style={styles.priorityPickerView}>
				<PriorityPicker pickedState={props.priorityPickerProps.pickedState} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	priorityPickerView: {
		marginVertical: 5,
	},
	ticketContentView: {
		marginVertical: 5,
	},
	ticketTitleView: {
		marginVertical: 5,
	},
	container: {
		flex: 1,
		marginHorizontal: 10,
		marginTop: 15,
		justifyContent: 'flex-start',
	},
});
