import React from 'react';
import { TouchableOpacity, Alert, StyleSheet, View, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';
import { IReceiptState } from '../../hooks/asyncStorage';
import { ShareReceiptMiniButton } from '../../features/ShareReceipt/ShareReceiptButton';


export default function ListItemContent({ item, goToReceiptModal }: { item: IReceiptState, goToReceiptModal: () => void }) {
  const t = useCustomColors();

  const trxType = (item.trxType === "ci" || item.trxType === "bi") ? 'Wpłata' : "Wypłata";

  const iconsColor = trxType === 'Wpłata' ? t.tint : t.green2;

  return (
    <TouchableOpacity onPress={goToReceiptModal} style={[s.itemContainer, { borderBottomColor: t.separator }]}>
      <View style={[s.avatarContainer, { backgroundColor: t.fillSecondary }]}>
        <Ionicons
          name={trxType === 'Wpłata' ? 'card-outline' : 'wallet-outline'}
          color={iconsColor}
          size={25}
        />
      </View>
      <View style={s.contentView}>
        <Text style={[s.datetime, { color: t.labelQuaternary }]}>
          {item.transactionStartDateTime}
        </Text>
        <Text style={[s.title, { color: t.text }]}>
          {trxType} {item.amount}
        </Text>
        <Text style={[s.datetime, { color: t.labelSecondary }]}>
          {item.localizationName}
        </Text>
        <Text style={[s.datetime, { color: t.labelSecondary }]}>
          {item.localizationStreet}, {item.localizationCity}</Text>
      </View>
      <ShareReceiptMiniButton data={item} iconsColor={iconsColor} />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  downloadBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  datetime: {
    fontSize: 12,
  },
  contentView: {
    marginLeft: 16,
    flexDirection: 'column',
    width: '76%',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 18,
  },
  title: {
    fontSize: 18,
  },
});
