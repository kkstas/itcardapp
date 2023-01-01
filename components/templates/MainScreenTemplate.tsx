import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import ProfileHeading from '../organisms/ProfileHeading';
import MainScreenApps from '../organisms/MainScreenApps';
import useCustomColors from '../../hooks/useCustomColors';
import { LinearGradient } from 'expo-linear-gradient';
import AppCardBlueprint from '../atoms/AppCardBlueprint';

interface MainScreenTemplateProps {
	navigateToProfile: () => void;
}

export default function MainScreenTemplate(props: MainScreenTemplateProps) {
	const t = useCustomColors();
	const grad = [
		'rgb(114, 172, 211)',
		'rgb(114, 172, 211)',
		'rgb(106, 175, 181)',
		'rgb(78, 89, 122)',
	];
	return (
		<ScrollView style={styles.scroll}>
			<LinearGradient style={styles.grad} colors={grad}>
				<Text style={styles.logoText}>Witaj w aplikacji</Text>
				<Image
					source={require('../../assets/images/ITCARD-white-logo.png')}
					style={styles.img}
					resizeMode="contain"
				/>
			</LinearGradient>
			<View style={styles.container}>
				<ProfileHeading onPress={props.navigateToProfile} />

				<MainScreenApps />
				<AppCardBlueprint />
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
	logoText: {
		fontSize: 15,
		color: '#ffffff',
		paddingBottom: 2,
		letterSpacing: 0.8,
		fontWeight: '600',
	},
	img: {
		width: 190,
		height: 42,
		opacity: 0.9,
	},
});
