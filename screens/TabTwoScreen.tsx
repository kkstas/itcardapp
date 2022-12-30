import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileHeading from '../components/organisms/ProfileHeading';
import MainScreenApps from '../components/organisms/MainScreenApps';

export default function TabTwoScreen() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<ProfileHeading />
				<MainScreenApps />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 15,
		alignItems: 'center',
	},
});
