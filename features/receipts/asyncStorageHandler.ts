
import AsyncStorage from "@react-native-async-storage/async-storage";


export interface IReceiptState {
  id: number;
  transactionStartDateTime: string;
  deviceName: string;
  transactionID: string;
  localizationName: string;
  localizationStreet: string;
  localizationCity: string;
  trempcardNumberFormatted: string;
  amount: string;
  trxType: "ci" | "co" | "bi" | "bo";
  // ci: cashIn
  // co: cashOut
  // bi: blikCashIn
  // bo: blikCashOut
}


export const removeSingleReceipt = async (deleteId: number) => {
  try {
    const receiptData = await AsyncStorage.getItem("receiptData");
    if (receiptData) {
      const parsedData: IReceiptState[] = JSON.parse(receiptData);
      if (Array.isArray(parsedData)) {
        const filteredData = parsedData.filter((t) => t.id != deleteId);
        await AsyncStorage.setItem("receiptData", JSON.stringify(filteredData));
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export const getAllReceipts = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("receiptData");
    const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log(parsedValue);
    return parsedValue;
  } catch (e) {
    console.log(e);
  }
};

export const addNewReceipt = async (data: IReceiptState) => {
  try {
    const receiptData = await AsyncStorage.getItem("receiptData");

    if (!receiptData) {
      const newData = JSON.stringify([data]);
      await AsyncStorage.setItem("receiptData", newData);
    } else {
      const resData = JSON.parse(receiptData);
      const readyData = JSON.stringify([...resData, data]);
      await AsyncStorage.setItem("receiptData", readyData);
    }
  } catch (e) {
    console.log(e);
  }
};

