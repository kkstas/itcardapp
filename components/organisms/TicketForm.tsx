import {
  Text,
  Keyboard,
  ScrollView,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import TicketTitleInput, {
  TicketTitleInputProps,
} from "../atoms/TicketTitleInput";
import TicketContentInput, {
  TicketContentInputProps,
} from "../atoms/TicketContentInput";
import PriorityPicker from "../atoms/PriorityPicker";
import useCustomColors from "../../hooks/useCustomColors";
import ImageBox from "./ImageBox";
import LocationButtons from "../molecules/LocatingButtons";
import { SubmitButton } from "../atoms/SubmitButton";

interface TicketFormProps {
  titleInputProps: TicketTitleInputProps;
  contentInputProps: TicketContentInputProps;
  submitTicket: () => void;
  goToMapScreen: (lat: number, lng: number) => void;
}

export default function TicketForm(props: TicketFormProps) {
  const t = useCustomColors();
  return (
    <ScrollView>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.ticketTitleView}>
            <TicketTitleInput
              maxTitleInputLength={props.titleInputProps.maxTitleInputLength}
              errMessage={props.titleInputProps.errMessage}
            />
          </View>
          <View style={styles.ticketContentView}>
            <TicketContentInput
              maxContentInputLength={
                props.contentInputProps.maxContentInputLength
              }
              errMessage={props.contentInputProps.errMessage}
            />
          </View>
          <View style={styles.priorityPickerView}>
            <PriorityPicker />
          </View>
          <View style={styles.addMedia}>
            <Text style={[styles.inputLabel, { color: t.labelSecondary }]}>
              Dołącz media
            </Text>
            <ImageBox />
          </View>
          <View style={styles.addLocation}>
            <Text style={[styles.inputLabel, { color: t.labelSecondary }]}>
              Dołącz lokalizację
            </Text>
            <LocationButtons goToMapScreen={props.goToMapScreen} />
          </View>
          <SubmitButton
            submitText="Wyślij zgłoszenie"
            onPress={props.submitTicket}
          />
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btnText: {
    fontSize: 16,
    color: "#fff",
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 8,
    width: "100%",
    height: 35,
    backgroundColor: "#39405a",
  },
  addLocation: {},
  pickMediaView: {},
  inputLabel: {
    paddingLeft: 8,
    paddingBottom: 2,
    fontWeight: "400",
    fontSize: 18,
  },
  addMedia: {
    marginVertical: 10,
  },
  priorityPickerView: {
    marginVertical: 9,
  },
  ticketContentView: {
    marginVertical: 8,
  },
  ticketTitleView: {
    marginVertical: 8,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 15,
    paddingBottom: 30,
    justifyContent: "flex-start",
  },
});
