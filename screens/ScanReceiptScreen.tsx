import { StyleSheet, View } from 'react-native';
import useCustomColors from '../hooks/useCustomColors';

export default function ScanReceiptScreen() {
	const t = useCustomColors();
	return <View style={[styles.container, { backgroundColor: t.pink }]}></View>;
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
