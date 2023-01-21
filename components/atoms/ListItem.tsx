import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { useState, useEffect } from 'react';
import Animated, {
	FadeInDown,
	FadeOutUp,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

interface ListItemProps {
	textColor?: string;
	iconLeft?: JSX.Element;
	isLast: boolean;
	text: string;
}

export default function ListItem(props: ListItemProps) {
	const [contentVis, setContentVis] = useState(false);
	const t = useCustomColors();

	const heightOffset = useSharedValue(0);

	useEffect(() => {
		heightOffset.value = contentVis ? 100 : 0;
	}, [contentVis]);

	const heightAnim = useAnimatedStyle(() => {
		return {
			height: withTiming(heightOffset.value),
		};
	});
	return (
		<TouchableOpacity style={styles.item} onPress={() => setContentVis((x) => !x)}>
			{/* <View style={styles.iconView}>{props.iconLeft && props.iconLeft}</View> */}
			<View
				style={[
					styles.content,
					styles.separator,
					{ borderBottomColor: props.isLast ? 'rgba(255, 255, 255, 0)' : t.separator },
				]}
			>
				<View style={styles.iconView}>{props.iconLeft && props.iconLeft}</View>
				<Text style={[{ color: props.textColor || t.text }, styles.text]}>
					{props.text}
				</Text>
				<Animated.View style={heightAnim}></Animated.View>
			</View>
			{contentVis && (
				<Animated.View
					style={styles.hiddenView}
					entering={FadeInDown}
					exiting={FadeOutUp}
				>
					<Ionicons name="warning-outline" size={20} color={t.pink} />
					<Text style={[styles.infoText, { color: t.pink }]}>
						Funkcja w trakcie budowy.
					</Text>
				</Animated.View>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	infoText: {
		fontWeight: '300',
		fontSize: 16,
		width: '100%',
		textAlign: 'center',
	},
	hiddenView: {
		width: '100%',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 12,
	},
	text: {
		marginTop: 3,
		fontSize: 17,
		textAlignVertical: 'center',
		textAlign: 'center',
	},
	iconView: {
		marginRight: 11,
		marginLeft: 16,
	},
	content: {
		flex: 1,
		height: '100%',
		paddingVertical: 8,
		flexDirection: 'row',
	},
	separator: {
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
