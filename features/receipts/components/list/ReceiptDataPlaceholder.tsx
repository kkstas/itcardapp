import { View, StyleSheet, Text } from 'react-native';
import useCustomColors from '../../../../hooks/useCustomColors';
import Animated, { FadeInLeft, FadeOutLeft } from 'react-native-reanimated';
import CallCenterSvg from '../../../../components/common/CallCenterSvg';

const ReceiptDataPlaceholder = () => {
  const t = useCustomColors();
  return (
    <Animated.View
      entering={FadeInLeft.delay(100)}
      exiting={FadeOutLeft}
      style={[styles.container]}
    >
      <View style={styles.mainComponent}>
        <CallCenterSvg color={t.tint} />
        <Text style={[styles.header, { color: t.labelPrimary }]}>
          Tu znajdziesz Twoje potwierdzenia
        </Text>
        <Text
          style={[styles.text, { color: t.labelSecondary, marginBottom: 5 }]}
        >
          Wygląda na to, że nie utworzyłeś jeszcze zgłoszenia.{' '}
        </Text>
        <Text style={[styles.text, { color: t.tint }]}>
          Dotknij, aby zeskanować pierwsze potwierdzenie
        </Text>
        <Text style={[styles.text, { color: t.labelTertiary }]}>lub</Text>
        <Text style={[styles.text, { color: t.tint }]}>
          Przejdź do Twoich zgłoszeń
        </Text>
      </View>
    </Animated.View>
  );
};

export default ReceiptDataPlaceholder;

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
