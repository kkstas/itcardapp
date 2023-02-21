import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useCustomColors from '../../../../hooks/useCustomColors'
import { IReceiptState } from '../../asyncStorageHandler'




const ReceiptDetailsModalList = ({ data }: { data: IReceiptState }) => {
  const t = useCustomColors()

  const trxTypeFormatted = data.trxType === "ci" || data.trxType === "bi" ? "Wpłata" : "Wypłata"

  return (
    <>

      <View style={styles.rowContainer}>
        <View style={styles.columnLeft}>
          <Text style={[styles.text, { color: t.text }]}>Data i czas</Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={[styles.text, { color: t.text }]}>{data.transactionStartDateTime}</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.columnLeft}>
          <Text style={[styles.text, { color: t.text }]}>Terminal</Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={[styles.text, { color: t.text }]}>{data.deviceName}</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.columnLeft}>
          <Text style={[styles.text, { color: t.text }]}>Nr transakcji</Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={[styles.text, { color: t.text }]}>{data.transactionID}</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.columnLeft}>
          <Text style={[styles.text, { color: t.text }]}>Lokalizacja</Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={[styles.text, { color: t.text }]}>{data.localizationName}</Text>
          <Text style={[styles.text, { color: t.text }]}>{data.localizationStreet}</Text>
          <Text style={[styles.text, { color: t.text }]}>{data.localizationCity}</Text>
        </View>
      </View>

      <View style={[styles.rowContainer, styles.cardContainer]}>
        <View style={styles.columnLeft}>
          <Text style={[styles.cardNumText, { color: t.text }]}>Numer karty:</Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={[styles.cardNumText, { color: t.text }]}>{data.trempcardNumberFormatted}</Text>
        </View>
      </View>


      <View style={styles.rowContainer}>
        <View style={styles.columnLeft}>
          <Text style={[styles.cashText, { color: t.text }]}>{trxTypeFormatted}</Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={[styles.cashText, { color: t.text }]}>{data.amount}</Text>
        </View>
      </View>

    </>
  )
}

export default ReceiptDetailsModalList


const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 0,
    marginTop: 18
  },
  cashText: {
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 1

  },
  cardNumText: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: '500'
  },
  columnLeft: {
    flex: 1
  },
  columnRight: {
    flex: 1.3,
    alignItems: "flex-end"
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: 4
  },
  text: {


  }
})
