import { View, StyleSheet, Text } from 'react-native';
import Colors, { CustomLightTheme } from '../../../constants/Colors';
import { Tmodules } from '../../../constants/atmsDummyData';
import { Ionicons } from '@expo/vector-icons';

export default function CashInCashOutInfo({ module }: { module: Tmodules }) {
  const t = { ...Colors, ...CustomLightTheme };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons
          name='card-outline'
          size={30}
          color={module === 'cashinout' ? t.tint : t.labelQuaternary}
        />
        {module === 'cashout' ? (
          <Ionicons
            name='close'
            size={30}
            color={t.labelQuaternary}
            style={styles.close}
          />
        ) : (
          <Ionicons
            name='checkmark-sharp'
            size={26}
            color='#00c375'
            style={styles.checkmark}
          />
        )}
        <Text
          style={[
            styles.text,
            { color: module === 'cashinout' ? t.tint : t.labelQuaternary },
          ]}
        >
          Wpłata
        </Text>
      </View>

      <View style={styles.row}>
        <Ionicons
          name='cash-outline'
          size={30}
          color={t.teal}
          style={{ top: 1 }}
        />

        <Ionicons
          name='checkmark-sharp'
          size={26}
          color='#0065c4'
          style={styles.checkmark}
        />
        <Text style={[styles.text, { color: t.teal }]}>Wypłata</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkmark: {
    position: 'absolute',
    right: -5,
    top: 6,
  },
  close: {
    position: 'absolute',
    right: -8,
    top: 8,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  text: {
    fontWeight: '500',
    fontSize: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
