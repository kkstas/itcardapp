import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { useState, useEffect } from 'react';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

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
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
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
