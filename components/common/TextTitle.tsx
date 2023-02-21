import { Text, StyleSheet, TextStyle } from 'react-native';

interface TextTitleProps {
	text: string;
	color: string;
	style?: TextStyle;
}

/**
 *
 * @param text - your text content
 * @param color - color of text
 * @param style (optional) - additional styling
 * @returns Styled text element
 */
export default function TextTitle(props: TextTitleProps) {
	return (
		<Text style={[styles.textStyle, { color: props.color }, props.style]}>
			{props.text}
		</Text>
	);
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 24,
	},
});
