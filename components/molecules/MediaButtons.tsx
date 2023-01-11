import useCustomColors from '../../hooks/useCustomColors';
import { View, Text, StyleSheet } from 'react-native';
import AddFromLibrary from '../atoms/AddFromLibrary';
import TakePhoto from '../atoms/TakePhoto';

export default function MediaButtons() {
	const t = useCustomColors();

	return (
		<View>
			<Text style={[styles.inputLabel, { color: t.labelSecondary }]}>
				Dodaj multimedia
			</Text>
			<View style={styles.buttonsContainer}>
				<AddFromLibrary />
				<TakePhoto />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	inputLabel: {
		paddingLeft: 8,
		paddingBottom: 2,
		fontWeight: '400',
		fontSize: 18,
	},
});
