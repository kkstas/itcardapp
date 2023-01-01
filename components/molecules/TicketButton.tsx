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
					<LinearGradient
						colors={[t.fillTertiary, t.fillQuaternary]}
						style={styles.iconView}
					>
						<Ionicons
							name="camera-outline"
							size={28}
							color={t.tint}
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
	icon: {},
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
		marginLeft: 16,
	},
	contentBox: {
		paddingVertical: 12,
		paddingHorizontal: 12,
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
