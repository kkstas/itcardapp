import { View, StyleSheet, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Layout from '../../constants/Layout';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

export default function UserDataListHeader() {
	const t = useCustomColors();
	const offset = useSharedValue(0);

	const animateLeftStyle = useAnimatedStyle(() => {
		return {
			transform: [{ scale: 1 - 0.1 * offset.value }],
		};
	});
	const animateRightStyle = useAnimatedStyle(() => {
		return {
			transform: [{ scale: 1 - 0.1 * (1 - offset.value) }],
			backgroundColor: `rgb(${230 + 25 * offset.value}, ${230 + 25 * offset.value}, ${
				230 + 25 * offset.value
			})`,
		};
	});

	return (
		<View style={[styles.container]}>
			<TouchableOpacity
				onPress={() => (offset.value = withTiming(0))}
				style={[styles.box]}
			>
				<Animated.View style={[styles.boxContent, animateLeftStyle]}>
					<Ionicons name="layers-outline" size={30} color={t.tint} />
					<Text style={[styles.btnText, { color: t.tint }]}>Twoje</Text>
					<Text style={[styles.btnText, { color: t.tint }]}>zgłoszenia</Text>
				</Animated.View>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => (offset.value = withTiming(1))}
				style={[styles.box]}
			>
				<Animated.View style={[styles.boxContent, animateRightStyle]}>
					<Ionicons name="receipt-outline" size={30} color={t.tint} />
					<Text style={[styles.btnText, { color: t.tint }]}>Twoje</Text>
					<Text style={[styles.btnText, { color: t.tint }]}>pokwitowania</Text>
				</Animated.View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		flexDirection: 'row',
		alignSelf: 'center',
		borderRadius: 8,
		overflow: 'hidden',
	},
	box: {
		alignItems: 'center',
		width: Layout.window.width / 2.5,
		paddingVertical: 8,
	},
	boxContent: {
		alignItems: 'center',
	},
	btnText: {},
});
