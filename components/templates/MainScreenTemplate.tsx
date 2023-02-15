import { View, ScrollView, StyleSheet, Pressable } from "react-native";
import ProfileHeading from "../organisms/ProfileHeading";
import MainScreenApps, {
  MainScreenAppsProps,
} from "../organisms/MainScreenApps";
import { LinearGradient } from "expo-linear-gradient";
import {
  blueGradientColors,
  blueLightGradientColors,
} from "../../constants/Colors";
import WelcomeToItcard from "../atoms/WelcomeToItcard";
import Layout from "../../constants/Layout";
import useCustomColors from "../../hooks/useCustomColors";

interface MainScreenTemplateProps extends MainScreenAppsProps {
  navigateToProfile: () => void;
  isFetchingLocation: boolean;
}

export default function MainScreenTemplate(props: MainScreenTemplateProps) {
  const screenHeight = Layout.window.height;
  const t = useCustomColors();
  return (
    <ScrollView
      style={{ paddingTop: screenHeight / 10 }}
      automaticallyAdjustKeyboardInsets={true}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        style={[
          styles.grad,
          { height: screenHeight, top: screenHeight * -0.87 },
        ]}
        colors={
          t.theme === "dark" ? blueGradientColors : blueLightGradientColors
        }
      />
      <View style={styles.container}>
        <View style={styles.welcomeToItCardView}>
          <WelcomeToItcard />
        </View>
        <ProfileHeading onPress={props.navigateToProfile} />
        <MainScreenApps
          navigateToInfo={props.navigateToInfo}
          navigateToTicket={props.navigateToTicket}
          navigateToScanReceipt={props.navigateToScanReceipt}
          navigateToLocateATM={props.navigateToLocateATM}
          isFetchingLocation={props.isFetchingLocation}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcomeToItCardView: {
    width: "80%",
    marginBottom: 10,
  },
  container: {
    alignItems: "center",
    paddingBottom: 180,
  },
  grad: {
    position: "absolute",
    width: "100%",
    justifyContent: "flex-end",
  },
});
