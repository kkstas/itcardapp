import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useCustomColors from '../../hooks/useCustomColors';
import Animated, {
	FadeInUp,
	FadeOutDown,
	SlideInUp,
	SlideOutDown,
} from 'react-native-reanimated';

export default function ScanButton({ onPress }: { onPress: () => void }) {
	const t = useCustomColors();
	return (
		<Animated.View entering={FadeInUp} exiting={FadeOutDown} style={styles.container}>
			<TouchableOpacity onPress={onPress} style={[styles.btn, { borderColor: t.tint }]}>
				<Ionicons name="scan" size={36} color={t.tint} />

				<Text style={[styles.text, { color: t.tint }]}>
					Naciśnij aby{'\n'} rozpocząć skanowanie
				</Text>
			</TouchableOpacity>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		paddingTop: 8,
		fontSize: 16,
	},
	btn: {
		borderRadius: 50,
		paddingHorizontal: 10,
		paddingVertical: 7,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		paddingTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
