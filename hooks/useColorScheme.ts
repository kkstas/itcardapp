import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';
import { getThemePreference } from './asyncStorage';
import { useAppDispatch, useAppSelector } from './reduxHooks';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme() {
	const reduxTheme = useAppSelector((state) => state.userPreferences.theme);
	const sysTheme = _useColorScheme();
	if (reduxTheme === 'dark' || reduxTheme === 'light') {
		return reduxTheme;
	} else {
		return sysTheme;
	}
}
