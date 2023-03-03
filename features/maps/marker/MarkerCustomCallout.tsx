import { View, Text, StyleSheet, Image } from 'react-native';
import useCustomColors from '../../../hooks/useCustomColors';
import Colors, { CustomLightTheme } from '../../../constants/Colors';
import { IatmElement } from '../../../constants/atmsDummyData';
import CalloutLogoImage from './CalloutLogoImage';
import CashInCashOutInfo from './CashInCashOutInfo';

export default function MarkerCustomCallout({
  element,
}: {
  element: IatmElement;
}) {
  const t = { ...Colors.light, ...CustomLightTheme };
  const locArr = element.adresLokalizacji.split(', ');
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <CalloutLogoImage institution={element.instytucja} />
      </View>
      <Text style={[styles.deviceName, { color: t.tint }]}>
        {element.nazwa}
      </Text>
      <Text style={[styles.locationName, { color: t.labelPrimary }]}>
        {element.nazwaLokalizacji}
      </Text>
      {locArr.map((str, index) => (
        <Text
          key={index}
          style={[styles.address]}
        >
          {str}
        </Text>
      ))}

      <CashInCashOutInfo module={element.moduly} />
    </View>
  );
}

const styles = StyleSheet.create({
  deviceName: {
    fontSize: 9,
    letterSpacing: 0.7,
    fontWeight: '700',
  },
  locationName: {
    fontWeight: '600',
    fontSize: 16,
  },
  atmType: {
    fontSize: 18,
  },
  address: {
    fontWeight: '500',
    fontSize: 12,
    color: '#464d83',
  },
  mainText: {
    fontSize: 22,
    fontWeight: '600',
  },
  container: {
    alignItems: 'center',
    minWidth: 120,
  },
  image: {
    width: 150,
    height: 50,
  },
});
