import AsyncStorage from "@react-native-async-storage/async-storage";

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


export const getAllTickets = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("ticketData");
    const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : null;
    for (const e of parsedValue) {
      console.log(`id: ${e.id}, title: ${e.title}`);
    }
    return parsedValue;
  } catch (e) {
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


