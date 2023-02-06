import * as Linking from 'expo-linking';

import { IReceiptState } from '../hooks/asyncStorage';


export default function transformReceiptUrl(url: string) {

  // if (!url.includes('itcard-receipt-server-m.onrender.com')) {
  //   return null;
  // }

  const urlCreated = Linking.parse(url)
  const urlParams = urlCreated.queryParams
  console.log('--URL PARAMS--------------------------------')
  console.log(urlParams)
  console.log('-------------------------------')

  if (!urlParams || !urlParams.h) {
    return null
  }

  const amountVal = String(urlParams.h).slice(2) || null
  const trxTypeVal = String(urlParams.h).slice(0, 2) || null
  if (trxTypeVal !== "ci" && trxTypeVal !== "co" && trxTypeVal !== "bi" && trxTypeVal !== "bo") {
    return null
  }

  if (!urlParams
    || !urlParams.a
    || !urlParams.b
    || !urlParams.c
    || !urlParams.d
    || !urlParams.e
    || !urlParams.f
    || !urlParams.g
    || !urlParams.h
    || !amountVal
    || !trxTypeVal) {
    return null
  }

  const transformedData: IReceiptState = {
    id: Date.now(),
    transactionStartDateTime: `${urlParams.a}`,
    deviceName: `${urlParams.b}`,
    transactionID: `${urlParams.c}`,
    localizationName: `${urlParams.d}`,
    localizationStreet: `${urlParams.e}`,
    localizationCity: `${urlParams.f}`,
    trempcardNumberFormatted: `${urlParams.g}`,
    amount: `${amountVal}`,
    trxType: `${trxTypeVal}`
  };
  console.log(`--transformedData-------------------`)
  console.log(transformedData)
  console.log('---------------------------------')

  return transformedData;
}
