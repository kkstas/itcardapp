import { StyleSheet, View } from 'react-native';
import useCustomColors from '../hooks/useCustomColors';

export default function LocateATMScreen() {
	const t = useCustomColors();
	return <View style={[styles.container, { backgroundColor: t.tint }]}></View>;
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
