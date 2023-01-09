import { View, StyleSheet } from 'react-native';
import useCustomColors from '../hooks/useCustomColors';

export default function CreateTicketScreen() {
	const t = useCustomColors();
	return <View style={[styles.container, { backgroundColor: t.labelPrimary }]}></View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
