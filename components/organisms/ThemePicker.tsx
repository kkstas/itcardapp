import { StyleSheet, Pressable, View, Text } from 'react-native';

interface ThemePickerProps {
	lightThemeHandler: () => void;
	defaultThemeHandler: () => void;
	darkThemeHandler: () => void;
}

export default function ThemePicker({
	lightThemeHandler,
	defaultThemeHandler,
	darkThemeHandler,
}: ThemePickerProps) {
	return (
		<View style={styles.container}>
			<Pressable onPress={lightThemeHandler} style={styles.pressLight}></Pressable>
			<Pressable onPress={defaultThemeHandler} style={styles.pressDefault}></Pressable>
			<Pressable onPress={darkThemeHandler} style={styles.pressDark}></Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	pressLight: {
		height: 50,
		backgroundColor: 'rgba(130, 151, 255, 0.1)',
		flex: 1,
	},
	pressDefault: {
		height: 50,
		flex: 1,
		backgroundColor: 'rgba(0, 255, 0, 0.1)',
	},
	pressDark: {
		height: 50,
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
	container: {
		flexDirection: 'row',
	},
});
