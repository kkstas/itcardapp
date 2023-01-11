import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../components/Themed';
import useCustomColors from '../hooks/useCustomColors';
import List from '../components/atoms/List';
import ProfileHeadingLarge from '../components/organisms/ProfileHeadingLarge';

import { useHeaderHeight } from '@react-navigation/elements';

export default function TabThreeScreen() {
	const t = useCustomColors();
	const headerHeight = useHeaderHeight();
	return (
		<ScrollView
			automaticallyAdjustKeyboardInsets={true}
			showsVerticalScrollIndicator={false}
		>
			<View
				style={[
					styles.container,
					{ paddingTop: headerHeight, backgroundColor: t.bgPrimaryGrouped },
				]}
			>
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
		marginTop: 10,
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
