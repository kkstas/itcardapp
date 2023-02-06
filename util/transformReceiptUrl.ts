import * as Linking from 'expo-linking';

import { IReceiptState } from '../hooks/asyncStorage';

interface IurlParams {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
}

export default function transformReceiptUrl(url: string) {

  // if (!url.includes('itcard-receipt-server-m.onrender.com')) {
  //   return null;
  // }

  const urlCreated = Linking.parse(url)
  const urlParams = urlCreated.queryParams
  console.log('--URL PARAMS--------------------------------')
  console.log(urlParams)
  console.log('-------------------------------')

  if (!urlParams || !urlParams.a || !urlParams.b || !urlParams.c || !urlParams.d || !urlParams.e || !urlParams.f || !urlParams.g || !urlParams.h) {
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
    amount: `${urlParams.h}`,
  };
  console.log(`--transformedData-------------------`)
  console.log(transformedData)
  console.log('---------------------------------')

  return transformedData;
}
