
import { View, StyleSheet, Text, Image } from 'react-native';
import SmallButtonWithIcon from '../atoms/SmallButtonWithIcon';
import useCustomColors from '../../hooks/useCustomColors';
import { IReceiptState } from '../../hooks/asyncStorage';
import { Ionicons } from '@expo/vector-icons';
import ReceiptDetailsModalList from '../molecules/ReceiptDetailsModalList';
import ShareReceiptButton from '../../features/ShareReceipt/ShareReceiptButton';


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

  const trxTypeText = data.trxType === "co" || data.trxType === "bo" ? "Wypłata" : "Wpłata"

  return (
    <View style={[styles.container, { backgroundColor: t.bgPrimary }]}>
      <View style={styles.textContainer}>
        <Image source={require("../../assets/images/planetCashLogoPrint.png")} style={styles.img} />
        <ReceiptDetailsModalList data={data} />
      </View>
      <ShareReceiptButton data={data} />
      <SmallButtonWithIcon
        text='Powrót'
        onPress={closeModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 215.68,
    height: 100,
    marginBottom: 30,
    // color: "white",


  },
  downloadBtn: {
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
    paddingTop: 5,
  },
  textContainer: {
    paddingHorizontal: 15,
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
