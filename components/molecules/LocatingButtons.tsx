import { View, StyleSheet } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';

export default function LocationButtons() {
	const t = useCustomColors();
	return <View style={[styles.container, { backgroundColor: t.textInput }]}></View>;
}

const styles = StyleSheet.create({
	container: {
		height: 200,
		borderRadius: 10,
	},
});
