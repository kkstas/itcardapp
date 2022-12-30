import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextContent from '../atoms/TextContent';
import TextTitle from '../atoms/TextTitle';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileHeadingLarge() {
	const t = useCustomColors();
	return (
		<TouchableOpacity style={styles.container}>
			<Ionicons name="person-circle" color={t.labelTertiary} style={styles.icon} />
			<View style={styles.textView}>
				<TextTitle
					style={{ fontSize: 28, letterSpacing: 0.9 }}
					text="Kamil Stasiak"
					color={t.text}
				/>
				<TextContent text="k.stasiak@itcard.pl" color={t.labelTertiary} />
			</View>
			<View
				style={{
					borderBottomWidth: StyleSheet.hairlineWidth,
					borderBottomColor: t.separator,
					width: '80%',
					height: 10,
					top: 15,
				}}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	icon: {
		fontSize: 80,
	},
	container: {
		backgroundColor: 'rgba(153, 25, 25, 0)',
		width: '100%',
		alignItems: 'center',
		paddingHorizontal: 12,
	},
	textView: {
		alignItems: 'center',
	},
});
