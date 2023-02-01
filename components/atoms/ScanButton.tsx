import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import {
  addNewReceipt,
  IReceiptState,
  removeSingleReceipt,
} from '../../hooks/asyncStorage';

export default function ScanButton({ onPress }: { onPress: () => void }) {
  const t = useCustomColors();

  const hadn = () => {
    const randData = Math.floor(Math.random() * 100000);
    const newDate = new Date().toISOString();
    const recData: IReceiptState = {
      id: randData,
      transactionStartDateTime: newDate,
      deviceName: `RNET${randData}`,
      transactionID: `98W${randData}999`,
      localizationName: `PL${randData}R`,
      localizationStreet: `Zq${randData}XX`,
      trempcardNumberFormatted: `WWX${randData}Xw`,
      amount: `15W0,${randData}00 EUR`,
    };
    addNewReceipt(recData);
  };

  // const hadn = () => {
  //   removeSingleReceipt(88832);
  // };

  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutDown}
      style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btn, { borderColor: t.tint }]}>
        <Text style={[styles.text, { color: t.tint }]}>
          Naciśnij aby{'\n'} rozpocząć skanowanie
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 80,
          width: 50,
          height: 50,
          backgroundColor: 'green',
        }}
        onPress={hadn}>
        <Text>Add default data</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    paddingTop: 8,
    fontSize: 16,
  },
  btn: {
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
