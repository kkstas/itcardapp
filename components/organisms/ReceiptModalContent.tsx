
import { View, StyleSheet, Text, Image } from 'react-native';
import SmallButtonWithIcon from '../atoms/SmallButtonWithIcon';
import useCustomColors from '../../hooks/useCustomColors';
import { IReceiptState } from '../../hooks/asyncStorage';
import { Ionicons } from '@expo/vector-icons';

interface ReceiptModalContentProps {
  data: IReceiptState;
  closeModal: () => void;
}

export default function ReceiptModalContent({
  data,
  closeModal,
}: ReceiptModalContentProps) {
  const t = useCustomColors();

  const receiptDate = new Date(data.id).toLocaleString();

  return (
    <View style={[styles.container, { backgroundColor: t.bgPrimary }]}>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name='time-outline'
            size={12}
            color={t.labelSecondary}
          />
          <Text style={[styles.appDate, { color: t.labelSecondary }]}>{receiptDate}</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 2 }}>
          <Ionicons
            name='navigate-circle-outline'
            size={12}
            color={t.labelSecondary}
          />
          <Text style={[styles.appDate, { color: t.labelSecondary }]}>
            {data.localizationName}, {data.localizationCity}, {data.localizationStreet}
          </Text>
        </View>
        <Text style={[styles.appTitle, { color: t.text }]}>{data.trxType} {data.amount}</Text>

        <Text style={[styles.appDescription, { color: t.labelPrimary }]}>
          {data.trempcardNumberFormatted}, {data.deviceName}, {data.transactionStartDateTime}
        </Text>
      </View>
      <SmallButtonWithIcon
        text='Powrót'
        onPress={closeModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appPriority: {
    fontSize: 8,
    paddingBottom: 4,
  },
  appDate: {
    fontSize: 12,
    marginLeft: 2,
  },
  locationImg: {
    width: '100%',
    aspectRatio: 2,
    marginTop: 15,
    borderRadius: 8,
  },
  img: {
    marginTop: 15,
    width: '100%',
    aspectRatio: 1.5,
    borderRadius: 8,
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
    paddingTop: 5,
  },
  textContainer: {
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  appTitle: {
    fontSize: 20,
    paddingBottom: 4,
  },
  appDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  container: {
    width: '94%',
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
});
