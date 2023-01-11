import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import TextContent from '../atoms/TextContent';
import TextTitle from '../atoms/TextTitle';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';
import { useAppSelector } from '../../hooks/reduxHooks';

export default function ProfileHeadingLarge() {
	const t = useCustomColors();
	const { firstName, lastName, email, jobTitle } = useAppSelector(
		(state) => state.userInfo
	);
	return (
		<TouchableOpacity style={styles.container}>
			<Ionicons name="person-circle" color={t.labelTertiary} style={styles.icon} />
			<View style={styles.textView}>
				<TextTitle
					style={styles.textTitle}
					text={firstName + ' ' + lastName}
					color={t.text}
				/>
				<TextContent
					text={jobTitle || ' '}
					color={t.labelTertiary}
					style={styles.jobTitle}
				/>
				<Text style={[styles.emailText, { color: t.tint }]}>{email || ' '}</Text>
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
	jobTitle: {
		textAlign: 'center',
	},
	emailText: {
		paddingTop: 2,
		fontSize: 11,
		fontWeight: '400',
		textAlign: 'center',
	},
	textTitle: {
		fontSize: 30,
		// letterSpacing: 0.9,
		textAlign: 'center',
	},
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
