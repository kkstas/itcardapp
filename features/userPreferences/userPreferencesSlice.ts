import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemePreference, HapticsPreference } from './asyncStorageHandler';

export interface UserPreferencesState {
  theme: ThemePreference | null;
  haptics: HapticsPreference | null;
}

const initialState: UserPreferencesState = {
  theme: null,
  haptics: null,
};

export const userPreferences = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    setThemeState: (
      state,
      action: PayloadAction<{
        theme: ThemePreference;
      }>
    ) => {
      state.theme = action.payload.theme;
    },
    setHapticsState: (
      state,
      action: PayloadAction<{
        haptics: HapticsPreference;
      }>
    ) => {
      state.haptics = action.payload.haptics;
    },
    clearAllPreferenceStates: (state) => {
      state.theme = null;
      state.haptics = null;
    },
  },
});

export const setThemeState = userPreferences.actions.setThemeState;
export const setHapticsState = userPreferences.actions.setHapticsState;
export const clearAllPreferenceStates = userPreferences.actions.clearAllPreferenceStates;

export default userPreferences.reducer;
