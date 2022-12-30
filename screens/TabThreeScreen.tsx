import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import useCustomColors from '../hooks/useCustomColors';
import List from '../components/atoms/List';
import ProfileHeadingLarge from '../components/organisms/ProfileHeadingLarge';

export default function TabThreeScreen() {
	const t = useCustomColors();
	return (
		<ScrollView
			automaticallyAdjustKeyboardInsets={true}
			showsVerticalScrollIndicator={false}
		>
			<View style={[styles.container, { backgroundColor: t.bgPrimaryGrouped }]}>
				<ProfileHeadingLarge />
				<List />

				<List />

				<List />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	textView: {
		paddingHorizontal: '5%',
	},
	text: {
		textAlign: 'center',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 24,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		width: '80%',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});
