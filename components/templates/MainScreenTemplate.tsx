import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileHeading from '../organisms/ProfileHeading';
import MainScreenApps, { MainScreenAppsProps } from '../organisms/MainScreenApps';
import { LinearGradient } from 'expo-linear-gradient';
import { blueGradientColors } from '../../constants/Colors';
import WelcomeToItcard from '../atoms/WelcomeToItcard';
import Layout from '../../constants/Layout';

interface MainScreenTemplateProps extends MainScreenAppsProps {
	navigateToProfile: () => void;
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
			/>
			<View style={styles.container}>
				<View style={styles.welcomeToItCardView}>
					<WelcomeToItcard />
				</View>
				<ProfileHeading onPress={props.navigateToProfile} />
				<MainScreenApps
					navigateToInfo={props.navigateToInfo}
					navigateToTicket={props.navigateToTicket}
					navigateToScanReceipt={props.navigateToScanReceipt}
					navigateToLocateATM={props.navigateToLocateATM}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	welcomeToItCardView: {
		width: '80%',
		marginBottom: 10,
	},
	container: {
		alignItems: 'center',
		paddingBottom: 180,
	},
	grad: {
		position: 'absolute',
		width: '100%',
		justifyContent: 'flex-end',
	},
});
