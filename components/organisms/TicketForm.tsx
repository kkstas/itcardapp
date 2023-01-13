import { Text, Keyboard, ScrollView, View, StyleSheet, Pressable } from 'react-native';
import TicketTitleInput, { TicketTitleInputProps } from '../atoms/TicketTitleInput';
import TicketContentInput, { TicketContentInputProps } from '../atoms/TicketContentInput';
import PriorityPicker, { PriorityPickerProps } from '../atoms/PriorityPicker';
import useCustomColors from '../../hooks/useCustomColors';
import ImageBox from './ImageBox';

interface TicketFormProps {
	titleInputProps: TicketTitleInputProps;
	contentInputProps: TicketContentInputProps;
	priorityPickerProps: PriorityPickerProps;
}

export default function TicketForm(props: TicketFormProps) {
	const t = useCustomColors();
	return (
		<ScrollView>
			<Pressable onPress={() => Keyboard.dismiss()}>
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
					<View style={styles.addMedia}>
						<Text style={[styles.inputLabel, { color: t.labelSecondary }]}>
							Dołącz media
						</Text>
						<ImageBox />
					</View>
				</View>
			</Pressable>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	pickMediaView: {},
	inputLabel: {
		paddingLeft: 8,
		paddingBottom: 2,
		fontWeight: '400',
		fontSize: 18,
	},
	addMedia: {
		marginVertical: 10,
	},
	priorityPickerView: {
		marginVertical: 9,
	},
	ticketContentView: {
		marginVertical: 8,
	},
	ticketTitleView: {
		marginVertical: 8,
	},
	container: {
		flex: 1,
		marginHorizontal: 10,
		marginTop: 15,
		justifyContent: 'flex-start',
	},
});
