import { Image, StyleSheet, ActivityIndicator } from 'react-native';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import useCustomColors from '../../hooks/useCustomColors';

export default function TestSplashElement() {
	const t = useCustomColors();
	return (
		<Animated.View
			entering={FadeInDown.duration(400)}
			exiting={FadeOutUp.duration(400).delay(200)}
			style={[
				styles.container,
				{
					backgroundColor:
						t.theme === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.7)',
				},
			]}
		>
			<Image
				source={require('../../assets/images/ITCARD-white-logo.png')}
				style={[styles.img, { tintColor: t.text }]}
				resizeMode="contain"
			/>
			<ActivityIndicator size="small" color={t.text} />
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 99,
	},
	img: {
		// width: 190,
		width: 240,
		// height: 42,
		height: 53,
		opacity: 0.9,
		marginBottom: 40,
	},
});
