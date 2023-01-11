import { Pressable, Text, StyleSheet } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function TakePhoto() {
	const t = useCustomColors();

	function handlePress() {
		console.log('pressed');
	}
	return (
		<Pressable onPress={handlePress} style={styles.mainPressable}>
			<LinearGradient
				// Background Linear Gradient
				colors={[t.bgSecondaryGrouped, t.bgPrimary]}
				style={styles.container}
			>
				<Ionicons name="camera-outline" size={32} color={t.tint} />

				<Text style={[styles.textLabel, { color: t.text }]}>Zrób zdjęcie</Text>
			</LinearGradient>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	mainPressable: {
		borderRadius: 8,
	},
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderRadius: 8,
	},
	textLabel: {},
});
