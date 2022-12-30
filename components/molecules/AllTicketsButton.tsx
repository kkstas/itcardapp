import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ContentBox from '../atoms/ContentBox';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import useCustomColors from '../../hooks/useCustomColors';

export default function AllTicketsButton() {
	const t = useCustomColors();
	return (
		<ContentBox style={styles.contentBox}>
			<TouchableOpacity style={{ flexDirection: 'row' }}>
				<View style={{ flex: 1 }}>
					<LinearGradient colors={['#808abd', '#385276']} style={styles.iconView}>
						<Ionicons
							name="folder-open"
							size={38}
							color={t.bgSecondaryGrouped}
							style={styles.icon}
						/>
					</LinearGradient>
				</View>

				<View style={styles.textView}>
					<Text style={[styles.textTitle, { color: t.text }]}>Twoje zgłoszenia</Text>
					<Text style={[styles.textContent, { color: t.labelSecondary }]}>
						Naciśnij aby zobaczyć wszystkie zgłoszone przez Ciebie sprawy.
					</Text>
				</View>
			</TouchableOpacity>
		</ContentBox>
	);
}

const styles = StyleSheet.create({
	icon: {
		shadowColor: '#00023f',
		shadowOffset: {
			width: 0,
			height: 1.1,
		},
		shadowOpacity: 0.9,
		shadowRadius: 1.3,
		elevation: 4,
	},
	textTitle: {
		fontSize: 18,
		marginBottom: 3,
	},
	textContent: {
		fontSize: 12,
		fontWeight: '400',
	},
	textView: {
		marginLeft: 12,
		flex: 6,
	},
	contentBox: {
		paddingVertical: 12,
		paddingHorizontal: 16,
		marginBottom: 12,
	},
	iconView: {
		borderRadius: 10,
		height: 48,
		width: 48,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
