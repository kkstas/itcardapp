import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';

interface ListItemProps {
	textColor?: string;
	iconLeft?: JSX.Element;
	isLast: boolean;
	text: string;
}

export default function ListItem(props: ListItemProps) {
	const t = useCustomColors();
	return (
		<TouchableOpacity style={styles.item}>
			<View style={styles.iconView}>{props.iconLeft && props.iconLeft}</View>
			<View
				style={[
					styles.content,
					styles.separator,
					{ borderBottomColor: props.isLast ? 'rgba(255, 255, 255, 0)' : t.separator },
				]}
			>
				<Text style={[{ color: props.textColor || t.text }, styles.text]}>
					{props.text}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 17,
	},
	iconView: {
		marginRight: 11,
		marginLeft: 16,
	},
	content: {
		flex: 1,
		height: '100%',
		paddingVertical: 10,
	},
	separator: {
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
