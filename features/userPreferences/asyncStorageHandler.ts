import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemePreference = "default" | "dark" | "light";
export type HapticsPreference = "default" | "disabled";

export const setThemePreference = async (pref: ThemePreference) => {
  try {
    await AsyncStorage.setItem("preferredTheme", pref);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const setHapticsPreference = async (pref: HapticsPreference) => {
  try {
    await AsyncStorage.setItem("preferredHaptics", pref);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

// read object data
export const getThemePreference = async () => {
  try {
    const value = await AsyncStorage.getItem("preferredTheme");
    return value != null ? value : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const getHapticsPreference = async () => {
  try {
    const value = await AsyncStorage.getItem("preferredHaptics");
    return value != null ? value : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
