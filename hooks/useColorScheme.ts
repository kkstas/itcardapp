import { useColorScheme as _useColorScheme } from "react-native";
import { useAppSelector } from "./reduxHooks";

export default function useColorScheme() {
  const reduxTheme = useAppSelector((state) => state.userPreferences.theme);
  const sysTheme = _useColorScheme();
  if (reduxTheme === "dark" || reduxTheme === "light") {
    return reduxTheme;
  } else {
    return sysTheme;
  }
}
