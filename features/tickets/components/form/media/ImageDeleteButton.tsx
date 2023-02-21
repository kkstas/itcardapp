import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ImageDeleteButton({
	onPress,
	color,
}: {
	color: string;
	onPress: () => void;
}) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
		>
			<Ionicons name="close" color={color} size={32} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		right: 10,
		top: 10,
		sshadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8,
	},
	pressed: {
		opacity: 0.4,
	},
});
