import { Text, StyleSheet, TextStyle } from 'react-native';

interface TextTitleProps {
	text: string;
	color: string;
	style?: TextStyle;
}

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
