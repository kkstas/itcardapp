import { StyleSheet, Text, View, Pressable } from 'react-native';
import useCustomColors from '../hooks/useCustomColors';
import { getThemePreference, setThemePreference } from '../hooks/asyncStorage';
import {
	setThemeState,
	setHapticsState,
	clearAllPreferenceStates,
} from '../store/slices/userPreferences';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useState } from 'react';

export default function LocateATMScreen() {
	const t = useCustomColors();
	const dispatch = useAppDispatch();

	const myThemePref = useAppSelector((state) => state.userPreferences.theme);

	async function getMyPref() {
		const val = await getThemePreference();
		if (val === 'dark' || val === 'light' || val === 'default') {
			dispatch(setThemeState({ theme: val }));
		}
	}

	async function setDarkTheme() {
		setThemePreference('dark');
		dispatch(setThemeState({ theme: 'dark' }));
	}
	async function setDefaultTheme() {
		setThemePreference('default');
		dispatch(setThemeState({ theme: 'default' }));
	}
	async function setLightTheme() {
		setThemePreference('light');
		dispatch(setThemeState({ theme: 'light' }));
	}

	return (
		<View style={[styles.container, { backgroundColor: t.tint }]}>
			<View
				style={{
					marginVertical: 80,
					marginHorizontal: 50,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text style={{ fontSize: 30 }}>{myThemePref}</Text>
				<Pressable
					onPress={getMyPref}
					style={{ width: 180, height: 60, backgroundColor: t.blue }}
				>
					<Text>asdf</Text>
				</Pressable>
				<Pressable
					onPress={setDefaultTheme}
					style={{ width: 180, height: 60, backgroundColor: t.indigo, marginTop: 50 }}
				>
					<Text>set to default</Text>
				</Pressable>

				<Pressable
					onPress={setDarkTheme}
					style={{ width: 180, height: 60, backgroundColor: '#000', marginTop: 50 }}
				>
					<Text style={{ color: '#fff' }}>set to DARK</Text>
				</Pressable>
				<Pressable
					onPress={setLightTheme}
					style={{ width: 180, height: 60, backgroundColor: '#fff', marginTop: 50 }}
				>
					<Text style={{ color: '#000' }}>set to LIGHT</Text>
				</Pressable>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
