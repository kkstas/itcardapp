import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View, StyleSheet } from 'react-native';
import useCustomColors from '../hooks/useCustomColors';

export default function ModalScreen() {
	const t = useCustomColors();
	return (
		<View style={[styles.container, { backgroundColor: t.bgPrimary }]}>
			<Text style={styles.title}>Dokumenty</Text>

			<Text style={styles.content}>
				Do uzupełnienia informacje o zakładce 'Dokumenty'
			</Text>

			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	);
}

const styles = StyleSheet.create({
	content: { marginVertical: 10 },
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
