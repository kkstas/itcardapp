import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileHeading from './ProfileHeading';
import MainScreenApps, { MainScreenAppsProps } from './MainScreenApps';
import { LinearGradient } from 'expo-linear-gradient';
import {
  blueGradientColors,
  blueLightGradientColors,
} from '../../constants/Colors';
import WelcomeToItcard from '../common/WelcomeToItcard';
import Layout from '../../constants/Layout';
import useCustomColors from '../../hooks/useCustomColors';
import { useScrollToTop, useIsFocused } from '@react-navigation/native';
import { useEffect, useRef } from 'react';

interface MainScreenTemplateProps extends MainScreenAppsProps {
  navigateToProfile: () => void;
  isFetchingLocation: boolean;
}

export default function MainScreenTemplate(props: MainScreenTemplateProps) {
  const screenHeight = Layout.window.height;
  const t = useCustomColors();

  const isFocused = useIsFocused();
  const ref = useRef<ScrollView | null>(null);
  /*
   * useScrollToTop sprawi, że w przypadku naciśnięcia
   * na przycisk aktywny w Bottom Tab Bar nastąpi
   * scrollowanie do góry ekranu.
   */
  useScrollToTop(ref);
  /* ----------------------------------------------- */

  /* --------------------------------------------------
   * ten useEffect służy do scrollowania do góry
   * ekranu w przypadku, gdy ekran został
   * właśnie zfocusowany
   */
  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        ref.current?.scrollTo({
          y: 0,
          animated: true,
        });
      }, 50);
    }
  }, [isFocused]);
  /* ----------------------------------------------- */

  return (
    <ScrollView
      ref={ref}
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
          t.theme === 'dark' ? blueGradientColors : blueLightGradientColors
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
    width: '80%',
    marginBottom: 10,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 180,
  },
  grad: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-end',
  },
});
