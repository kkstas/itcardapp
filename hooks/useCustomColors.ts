import { CustomLightTheme, CustomDarkTheme } from "../constants/Colors";
import useColorScheme from "./useColorScheme";
import { useAppSelector } from "../hooks/reduxHooks";

export default function useCustomColors() {
  const userReduxTheme = useAppSelector((state) => state.userPreferences.theme);
  const scheme = useColorScheme();
  if (userReduxTheme === "dark") {
    return CustomDarkTheme;
  }
  if (userReduxTheme === "light") {
    return CustomLightTheme;
  }
  if (scheme === "dark") {
    return CustomDarkTheme;
  } else {
    return CustomLightTheme;
  }
}
