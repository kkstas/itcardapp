import { Text, StyleSheet, TextStyle } from 'react-native';

interface TextContentProps {
	text: string;
	color: string;
	style?: TextStyle;
}

export default function TextContent(props: TextContentProps) {
	return (
		<Text style={[styles.textStyle, { color: props.color }, props.style]}>
			{props.text}
		</Text>
	);
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 14,
	},
});
