import { StyleSheet, View, ScrollView } from "react-native";
import useCustomColors from "../../hooks/useCustomColors";
import List from "../atoms/List";
import ProfileHeadingLarge from "../organisms/ProfileHeadingLarge";
import { useHeaderHeight } from "@react-navigation/elements";
import ThemePicker from "../organisms/ThemePicker";
import { ThemePreference } from "../../hooks/asyncStorage";

interface ITabThreeScreenTemplate {
  asyncThemeState: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
}

export default function TabThreeScreenTemplate(props: ITabThreeScreenTemplate) {
  const t = useCustomColors();
  const headerHeight = useHeaderHeight();

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
        <ProfileHeadingLarge />
        <List />

        <View style={styles.themePickerView}>
          <ThemePicker
            setTheme={props.setTheme}
            asyncThemeState={props.asyncThemeState}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  themePickerView: {
    width: "100%",
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
});
