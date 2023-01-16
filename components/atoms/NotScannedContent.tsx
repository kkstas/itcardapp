import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useCustomColors from '../../hooks/useCustomColors';
import Animated, {
	FadeInUp,
	FadeInDown,
	FadeOutUp,
	FadeOutDown,
	SlideInUp,
	SlideOutDown,
} from 'react-native-reanimated';

export default function NotScannedContent({ onPress }: { onPress: () => void }) {
	const t = useCustomColors();
	return (
		<Animated.View entering={FadeInDown} exiting={FadeOutUp} style={styles.container}>
			<TouchableOpacity onPress={onPress} style={[styles.btn, { borderColor: t.tint }]}>
				<Ionicons name="scan" size={36} color={t.tint} />

				<Text style={[styles.text, { color: t.tint }]}>
					Skieruj aparat na kod QR.{'\n'}Skanowanie w toku...
				</Text>
				<Text style={[styles.cancelText, { color: t.pink }]}>Anuluj</Text>
			</TouchableOpacity>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	cancelText: {
		textAlign: 'center',
		paddingTop: 10,
		fontSize: 16,
	},
	text: {
		textAlign: 'center',
		paddingTop: 8,
		fontSize: 18,
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
