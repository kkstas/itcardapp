import { View, StyleSheet, Text } from 'react-native';
import useCustomColors from '../../../../hooks/useCustomColors';
import Animated, { FadeInLeft, FadeOutLeft } from 'react-native-reanimated';
import PhoneQRSvg from '../../../../components/common/PhoneQRSvg';

const TicketDataPlaceholder = () => {
  const t = useCustomColors();
  return (
    <Animated.View
      entering={FadeInLeft.delay(100)}
      exiting={FadeOutLeft}
      style={[styles.container]}
    >
      <View style={styles.mainComponent}>
        <PhoneQRSvg
          color={t.tint}
          currentBackgroundColor={t.bgPrimary}
        />
        <Text style={[styles.header, { color: t.labelPrimary }]}>
          Tu znajdziesz Twoje zgłoszenia
        </Text>
        <Text
          style={[styles.text, { color: t.labelSecondary, marginBottom: 5 }]}
        >
          Wygląda na to, że nie utworzyłeś jeszcze zgłoszenia.{' '}
        </Text>
        <Text style={[styles.text, { color: t.tint }]}>
          Dotknij, aby utworzyć pierwsze zgłoszenie
        </Text>
        <Text style={[styles.text, { color: t.labelTertiary }]}>lub</Text>
        <Text style={[styles.text, { color: t.tint }]}>
          Przejdź do Twoich pokwitowań
        </Text>
      </View>
    </Animated.View>
  );
};

export default TicketDataPlaceholder;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
    opacity: 0.9,
  },
  imgDark: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 20,
  },
  text: {
    fontSize: 14,
    paddingBottom: 3,
    textAlign: 'center',
  },
  mainComponent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
