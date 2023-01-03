import { StyleSheet, Image, Text } from 'react-native';

export default function WelcomeToItcard() {
	return (
		<>
			<Text style={styles.logoText}>Witaj w aplikacji</Text>
			<Image
				source={require('../../assets/images/ITCARD-white-logo.png')}
				style={styles.img}
				resizeMode="contain"
			/>
		</>
	);
}

const styles = StyleSheet.create({
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
