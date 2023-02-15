import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemePreference = "default" | "dark" | "light";
export type HapticsPreference = "default" | "disabled";

export interface TicketDataType {
  id: number;
  title: string;
  priority: string;
  content: string;
  media: string | null;
  thumbnailUri: string | null;
  locationUri: string | null;
  address: string | null;
}

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

export const removeSingleItem = async (deleteId: number) => {
  try {
    const ticketData = await AsyncStorage.getItem("ticketData");
    if (ticketData) {
      const parsedData: TicketDataType[] = JSON.parse(ticketData);
      if (Array.isArray(parsedData)) {
        const filteredData = parsedData.filter((t) => t.id != deleteId);
        await AsyncStorage.setItem("ticketData", JSON.stringify(filteredData));
      }
    }
  } catch (e) {
    console.log(e);
  }
};

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
    console.log("Fetching receipts from AsyncStorage (receiptData):");
    const jsonValue = await AsyncStorage.getItem("receiptData");
    const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log(parsedValue);
    return parsedValue;
  } catch (e) {
    console.log("Fetching receipts from AsyncStorage failed");
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

export const getAllTickets = async () => {
  try {
    console.log("Fetching tickets from AsyncStorage (ticketData):");
    const jsonValue = await AsyncStorage.getItem("ticketData");
    const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : null;
    for (const e of parsedValue) {
      console.log(`id: ${e.id}, title: ${e.title}`);
    }
    return parsedValue;
  } catch (e) {
    console.log("Fetching tickets from AsyncStorage failed");
    console.log(e);
  }
};

export const addNewTicket = async (data: TicketDataType) => {
  try {
    const ticketData = await AsyncStorage.getItem("ticketData");

    if (!ticketData) {
      const newData = JSON.stringify([data]);
      await AsyncStorage.setItem("ticketData", newData);
    } else {
      const resData = JSON.parse(ticketData);
      const readyData = JSON.stringify([...resData, data]);
      await AsyncStorage.setItem("ticketData", readyData);
    }
  } catch (e) {
    console.log(e);
  }
};

export const setThemePreference = async (pref: ThemePreference) => {
  try {
    await AsyncStorage.setItem("preferredTheme", pref);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const setHapticsPreference = async (pref: HapticsPreference) => {
  try {
    await AsyncStorage.setItem("preferredHaptics", pref);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

// read object data
export const getThemePreference = async () => {
  try {
    const value = await AsyncStorage.getItem("preferredTheme");
    return value != null ? value : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const getHapticsPreference = async () => {
  try {
    const value = await AsyncStorage.getItem("preferredHaptics");
    return value != null ? value : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
