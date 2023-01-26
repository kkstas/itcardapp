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
    (s) => s.userInfo
  );

  const {
    title,
    content,
    address,
    priority,
    locationUri,
    thumbnailUri,
    media,
  } = useAppSelector((s) => s.ticketData);

  const dispatch = useAppDispatch();

  function submitTicket() {
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
      addNewTicket(data);
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
        submitTicket={submitTicket}
        goToMapScreen={goToMapScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
