import {
	View,
	ScrollView,
	TouchableOpacity,
	Image,
	Text,
	StyleSheet,
	TextInput,
} from 'react-native';
import ProfileHeading from '../organisms/ProfileHeading';
import MainScreenApps from '../organisms/MainScreenApps';
import useCustomColors from '../../hooks/useCustomColors';
import { LinearGradient } from 'expo-linear-gradient';
import AppCardBlueprint from '../atoms/AppCardBlueprint';
import ContentBox from '../atoms/ContentBox';

interface LoginScreenTemplateProps {
	navigateToProfile: () => void;
}

export default function LoginScreenTemplate(props: LoginScreenTemplateProps) {
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
				<ContentBox style={styles.contentBox}>
					<Text style={[styles.mainText, { color: t.labelTertiary }]}>Logowanie</Text>
					<View style={[styles.separator, { borderBottomColor: t.separator }]}></View>
					<Text style={[styles.inputLabel, { color: t.labelSecondary }]}>
						Login lub adres e-mail
					</Text>
					<TextInput
						style={[
							styles.loginInput,
							{ backgroundColor: t.fillSecondary, color: t.text },
						]}
					/>
					<Text style={[styles.inputLabel, { color: t.labelSecondary }]}>Hasło</Text>
					<TextInput
						style={[
							styles.loginInput,
							{ backgroundColor: t.fillSecondary, color: t.text },
						]}
					/>
					<View style={styles.buttonView}>
						<TouchableOpacity onPress={props.navigateToProfile}>
							<LinearGradient
								colors={['rgb(121, 150, 174)', 'rgb(99, 116, 169)']}
								style={styles.loginButton}
							>
								<Text style={[styles.loginBtnText, { color: 'white' }]}>Zaloguj</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</ContentBox>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	separator: {
		top: -5,
		marginLeft: 8,
		width: '75%',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginBottom: 5,
	},
	loginBtnText: {
		fontSize: 17,
		fontWeight: '400',
	},
	loginButton: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 8,
		width: '100%',
		borderRadius: 10,
		marginTop: 35,
	},
	buttonView: {},
	inputLabel: {
		marginTop: 10,
		paddingLeft: 8,
		paddingBottom: 2,
		fontWeight: '300',
	},
	loginInput: {
		paddingVertical: 7,
		paddingHorizontal: 12,
		borderRadius: 8,
		fontSize: 16,
	},
	mainText: {
		fontSize: 48,
		paddingLeft: 8,
		fontWeight: '200',
	},
	contentBox: {
		paddingTop: 30,
		paddingBottom: 50,
	},
	container: {
		paddingTop: 15,
		alignItems: 'center',
		borderRadius: 25,
		flex: 1,
	},
	scroll: {
		paddingTop: 215,
	},
	grad: {
		position: 'absolute',
		width: '100%',
		height: 950,
		top: -880,
		paddingBottom: 70,
		paddingHorizontal: 38,
		justifyContent: 'flex-end',
	},
	logoText: {
		fontSize: 15,
		color: '#ffffff',
		paddingBottom: 2,
		letterSpacing: 0.8,
		fontWeight: '500',
	},
	img: {
		width: 190,
		height: 42,
		opacity: 0.9,
	},
});
