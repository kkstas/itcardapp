import { View, Text, StyleSheet, Image } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import Colors from '../../constants/Colors';

export default function MarkerCustomCallout() {
	const t = Colors.light;
	return (
		<View>
			<View style={styles.container}>
				<Image
					source={require('../../assets/images/planet-cash.png')}
					style={styles.image}
				/>
			</View>
			<Text style={[styles.atmType, { color: t.tint }]}>Bankomat + Wpłatomat</Text>
			<Text style={[styles.address]}>ul. Rakowiecka 23/3, Wrocław</Text>
			<Text>CUSTOM</Text>
			<Text>CUSTOM</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	atmType: {
		paddingTop: 10,
		textAlign: 'center',
	},
	address: {
		fontWeight: '500',
		fontSize: 12,
	},
	mainText: {
		fontSize: 22,
		fontWeight: '500',
	},
	container: {
		alignItems: 'center',
	},
	image: {
		width: 50,
		height: 50,
	},
});
