import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileHeading from '../organisms/ProfileHeading';
import MainScreenApps from '../organisms/MainScreenApps';
import { LinearGradient } from 'expo-linear-gradient';
import { blueGradientColors } from '../../constants/Colors';
import WelcomeToItcard from '../atoms/WelcomeToItcard';
import Layout from '../../constants/Layout';

interface MainScreenTemplateProps {
	navigateToProfile: () => void;
	navigateToInfo: () => void;
}

export default function MainScreenTemplate(props: MainScreenTemplateProps) {
	const screenHeight = Layout.window.height;
	return (
		<ScrollView
			style={{ paddingTop: screenHeight / 10 }}
			automaticallyAdjustKeyboardInsets={true}
			showsVerticalScrollIndicator={false}
		>
			<LinearGradient
				style={[styles.grad, { height: screenHeight, top: screenHeight * -0.87 }]}
				colors={blueGradientColors}
			>
				{/* <WelcomeToItcard /> */}
			</LinearGradient>
			<View style={styles.container}>
				<View style={{ width: '80%', marginBottom: 10 }}>
					<WelcomeToItcard />
				</View>
				<ProfileHeading onPress={props.navigateToProfile} />
				<MainScreenApps navigateToInfo={props.navigateToInfo} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		// paddingTop: 15,
		alignItems: 'center',
		borderRadius: 25,
		flex: 1,
		paddingBottom: 180,
		// backgroundColor: 'red',
	},
	grad: {
		position: 'absolute',
		width: '100%',
		justifyContent: 'flex-end',
	},
});
