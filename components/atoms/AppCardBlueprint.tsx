import { Pressable, View, StyleSheet, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import ContentBox from './ContentBox';
import { Ionicons } from '@expo/vector-icons';
import SmallButtonWithIcon from './SmallButtonWithIcon';
import { LinearGradient } from 'expo-linear-gradient';

export default function AppCardBlueprint() {
	const contentText =
		'Naciśnij asd asby o asdjhf aslfsdkjahf slkdhf skjadhf ksjdhf skjlahf kljs dfkjsad';
	const t = useCustomColors();
	return (
		<ContentBox style={styles.container}>
			<LinearGradient
				colors={[t.informativeBackground, t.informativeBackground]}
				style={styles.iconView}
			>
				<Ionicons name="code" size={30} color={'#fff'} />
			</LinearGradient>
			<View style={styles.textView}>
				<Text style={[styles.titleText, { color: t.text }]}>Tytuł aplikacji</Text>
				<Text style={[styles.text, { color: t.labelSecondary }]}>{contentText}</Text>
				<View style={styles.buttonsView}>
					<Pressable style={styles.learnMorePressable}>
						<Text style={[styles.learnMore, { color: t.tint }]}>
							Dowiedz się więcej...
						</Text>
					</Pressable>
					<SmallButtonWithIcon
						text="Przejdź"
						icon={<Ionicons name="paper-plane" size={18} color={t.text} />}
						style={styles.smallButtonStyle}
					/>
				</View>
			</View>
		</ContentBox>
	);
}

const styles = StyleSheet.create({
	learnMorePressable: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	smallButtonStyle: {
		marginTop: 12,
	},
	buttonsView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	learnMore: {
		fontSize: 12,
	},
	iconView: {
		padding: 5,
		borderRadius: 10,
		width: 45,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		fontSize: 22,
		fontWeight: '500',
	},
	textView: {
		flex: 1,
		paddingLeft: 8,
	},
	container: {
		paddingRight: 12,
		paddingLeft: 15,
		paddingBottom: 8,
		flexDirection: 'row',
	},
	text: {},
});
