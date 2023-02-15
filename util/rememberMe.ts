import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserData {
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
}

export const rememberUserData = async (data: IUserData) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem("ccusr", jsonData);
  } catch (error) {
    // console.log(error);
  }
};

export const clearUserData = async () => {
  try {
    await AsyncStorage.setItem("ccusr", "");
  } catch (error) {
    // log
  }
};

export const readUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("ccusr");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    // err
  }
};
