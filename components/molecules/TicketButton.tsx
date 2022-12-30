import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ContentBox from '../atoms/ContentBox';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import useCustomColors from '../../hooks/useCustomColors';

export default function TicketButton() {
	const t = useCustomColors();
	return (
		<ContentBox style={styles.contentBox}>
			<TouchableOpacity style={{ flexDirection: 'row' }}>
				<View style={{ flex: 1 }}>
					<LinearGradient colors={['#5ddab4', '#0a8183']} style={styles.iconView}>
						<Ionicons
							name="camera"
							size={38}
							color={t.bgSecondaryGrouped}
							style={styles.icon}
						/>
					</LinearGradient>
				</View>
				<View style={styles.textView}>
					<Text style={[styles.textTitle, { color: t.text }]}>Utwórz zgłoszenie</Text>
					<Text style={[styles.textContent, { color: t.labelSecondary }]}>
						Masz zastrzeżenia co do stanu bankomatu? Prześlij nam info!
					</Text>
				</View>
			</TouchableOpacity>
		</ContentBox>
	);
}

const styles = StyleSheet.create({
	icon: {
		shadowColor: '#011825',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.82,
		shadowRadius: 1.4,
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
		flex: 6,
		marginLeft: 12,
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
