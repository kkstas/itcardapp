import { StyleSheet, View, ScrollView } from 'react-native';
import useCustomColors from '../hooks/useCustomColors';
import List from '../components/atoms/List';
import ProfileHeadingLarge from '../components/organisms/ProfileHeadingLarge';

import { useHeaderHeight } from '@react-navigation/elements';
import { getThemePreference, setThemePreference } from '../hooks/asyncStorage';
import { setThemeState } from '../store/slices/userPreferences';
import { useAppDispatch } from '../hooks/reduxHooks';
import ThemePicker from '../components/organisms/ThemePicker';

export default function TabThreeScreen() {
	const t = useCustomColors();
	const headerHeight = useHeaderHeight();
	const dispatch = useAppDispatch();

	async function setThemeToDark() {
		setThemePreference('dark');
		dispatch(setThemeState({ theme: 'dark' }));
	}
	async function setThemeToLight() {
		setThemePreference('light');
		dispatch(setThemeState({ theme: 'light' }));
	}
	async function setThemeToDefault() {
		setThemePreference('default');
		dispatch(setThemeState({ theme: 'default' }));
	}

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
				<ThemePicker
					lightThemeHandler={setThemeToLight}
					defaultThemeHandler={setThemeToDefault}
					darkThemeHandler={setThemeToDark}
				/>
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
