import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import ProfileHeading from '../organisms/ProfileHeading';
import MainScreenApps from '../organisms/MainScreenApps';
import useCustomColors from '../../hooks/useCustomColors';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { blueGradientColors } from '../../constants/Colors';
import WelcomeToItcard from '../atoms/WelcomeToItcard';

interface MainScreenTemplateProps {
	navigateToProfile: () => void;
	navigateToInfo: () => void;
}

export default function MainScreenTemplate(props: MainScreenTemplateProps) {
	const t = useCustomColors();
	return (
		<ScrollView style={styles.scroll}>
			<LinearGradient style={styles.grad} colors={blueGradientColors}>
				<WelcomeToItcard />
			</LinearGradient>
			<View style={styles.container}>
				<ProfileHeading onPress={props.navigateToProfile} />
				{/* eksperyment ponizej */}
				<View style={{}}>
					<LinearGradient
						colors={[t.fillTertiary, t.fillQuaternary]}
						style={{
							borderRadius: 10,
							justifyContent: 'center',
							alignItems: 'center',
							paddingHorizontal: 10,
							paddingVertical: 10,
						}}
					>
						<Ionicons name="layers-outline" size={38} color={t.tint} />
						<Text style={{ color: t.tint, paddingTop: 10, fontSize: 15 }}>Dokumenty</Text>
					</LinearGradient>
				</View>
				{/* eksperyment powyzej */}
				<MainScreenApps navigateToInfo={props.navigateToInfo} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 15,
		alignItems: 'center',
		borderRadius: 25,
		flex: 1,
		paddingBottom: 180,
	},
	scroll: {
		paddingTop: 135,
	},
	grad: {
		position: 'absolute',
		width: '100%',
		height: 880,
		top: -830,
		paddingBottom: 50,
		paddingHorizontal: 38,
		justifyContent: 'flex-end',
	},
});
