import {
  getThemePreference,
  setThemePreference,
} from '../features/userPreferences/asyncStorageHandler';
import { setThemeState } from '../features/userPreferences/userPreferencesSlice';
import { useAppDispatch } from '../hooks/reduxHooks';
import { useState } from 'react';
import { ThemePreference } from '../features/userPreferences/asyncStorageHandler';
import TabThreeScreenTemplate from '../components/tabThreeScreen/TabThreeScreenTemplate';

export default function TabThreeScreen() {
  const dispatch = useAppDispatch();
  const [asyncThemeState, setAsyncThemeState] =
    useState<ThemePreference>('default');

  async function setThemePrefToState() {
    const currentAsyncStorageTheme = await getThemePreference();
    setAsyncThemeState(
      currentAsyncStorageTheme === 'light'
        ? 'light'
        : currentAsyncStorageTheme === 'dark'
        ? 'dark'
        : 'default'
    );
  }
  setThemePrefToState();

  const setTheme = async (theme: ThemePreference) => {
    setThemePreference(theme);
    dispatch(setThemeState({ theme: theme }));
    setAsyncThemeState(theme);
  };

  return (
    <TabThreeScreenTemplate
      asyncThemeState={asyncThemeState}
      setTheme={setTheme}
    />
  );
}
