import { CustomLightTheme, CustomDarkTheme } from '../constants/Colors';
import useColorScheme from './useColorScheme';

export default function useCustomColors() {
	const scheme = useColorScheme();
	if (scheme === 'dark') {
		return CustomDarkTheme;
	} else {
		return CustomLightTheme;
	}
}
