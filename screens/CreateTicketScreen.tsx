import useCustomColors from "../hooks/useCustomColors";
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import TicketForm from "../components/organisms/TicketForm";
import { useAppSelector } from "../hooks/reduxHooks";
import { TicketDataType, addNewTicket } from "../hooks/asyncStorage";
import { useAppDispatch } from "../hooks/reduxHooks";
import { postTicketData } from "../util/ticketData";
import { TabTwoMainStackScreenProps } from "../types";
import { clearInputs } from "../store/slices/ticketData";

export default function CreateTicketScreen({
  navigation,
}: TabTwoMainStackScreenProps<"CreateTicketScreen">) {
  const t = useCustomColors();
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [contentErrMessage, setContentErrMessage] = useState<string | null>(
    null
  );
  const maxTitleInputLength = 100;
  const maxContentInputLength = 800;
  const { email, firstName, lastName, jobTitle } = useAppSelector(
    (state) => state.userInfo
  );

  /// new redux
  const {
    title,
    content,
    address,
    priority,
    locationUri,
    thumbnailUri,
    media,
  } = useAppSelector((state) => state.ticketData);

  const dispatch = useAppDispatch();

  // sends data to AsyncStorage (addNewTicket function)
  // AND sends POST request to database (postTicketData function)
  function submitTicketToAsyncStorage() {
    // if title and content of the form is not empty
    if (title && content) {
      const data: TicketDataType = {
        id: Date.now(),
        title: title,
        priority: priority,
        content: content,
        media: media,
        thumbnailUri: thumbnailUri,
        locationUri: locationUri,
        address: address,
      };
      // add to AsyncStorage
      addNewTicket(data);
      // clear media and thumbnail data from redux
      // send POST request to database
      postTicketData({
        ...data,
        email: email,
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
      });

      dispatch(clearInputs());
      navigation.goBack();
    } else if (!title && content) {
      setErrMessage("Uzupełnij tytuł zgłoszenia");
      setContentErrMessage("");
    } else if (title && !content) {
      setErrMessage("");
      setContentErrMessage("Uzupełnij treść zgłoszenia");
    } else {
      setErrMessage("Uzupełnij tytuł zgłoszenia");
      setContentErrMessage("Uzupełnij treść zgłoszenia");
    }
  }

  const goToMapScreen = (lat: number, lng: number) => {
    navigation.navigate("MapScreen", { lat: lat, lng: lng });
  };

  return (
    <View style={[styles.container, { backgroundColor: t.bgPrimaryGrouped }]}>
      <TicketForm
        titleInputProps={{
          maxTitleInputLength: maxTitleInputLength,
          errMessage: errMessage,
        }}
        contentInputProps={{
          maxContentInputLength: maxContentInputLength,
          errMessage: contentErrMessage,
        }}
        submitTicket={submitTicketToAsyncStorage}
        goToMapScreen={goToMapScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorView: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    paddingTop: 3,
  },
  errorMessage: {
    fontSize: 11,
    paddingLeft: 3,
  },
  logo: {
    position: "absolute",
    left: 5,
    padding: 5,
  },
  inputLabel: {
    marginTop: 10,
    paddingLeft: 8,
    paddingBottom: 2,
    fontWeight: "300",
  },
  loginInput: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 34,
  },
});
