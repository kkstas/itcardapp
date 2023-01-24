import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { StyleSheet, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';

export default function LoadingOverlay({
	paddingBottom,
	fontSize,
}: {
	paddingBottom?: number;
	fontSize?: number;
}) {
	const t = useCustomColors();
	const fSize = fontSize || 22;
	return (
		<Animated.View
			entering={FadeInDown}
			exiting={FadeOutUp}
			style={[styles.container, { paddingBottom: paddingBottom || 0 }]}
		>
			<Text style={[styles.text, { fontSize: fSize, color: t.tint }]}>Ładowanie...</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	text: {},
	container: {
		position: 'absolute',
		zIndex: 10,
	},
});
