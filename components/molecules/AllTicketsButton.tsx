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
					<LinearGradient
						colors={[t.fillTertiary, t.fillQuaternary]}
						style={styles.iconView}
					>
						<Ionicons
							name="folder-open-outline"
							size={28}
							color={t.tint}
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
		marginLeft: 16,
		flex: 6,
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
