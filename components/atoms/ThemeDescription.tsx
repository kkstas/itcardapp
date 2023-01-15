import { StyleSheet, View, Pressable, Text } from 'react-native';
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import useCustomColors from '../../hooks/useCustomColors';

export default function ThemeDescription({ text }: { text: string }) {
	const t = useCustomColors();
	return (
		<Animated.View entering={FadeInUp} exiting={FadeOutDown} style={styles.container}>
			<Text style={{ textAlign: 'center', color: t.labelPrimary }}>{text}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 15,
	},
});
