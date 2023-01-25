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
import PriorityPicker, { PriorityPickerProps } from "../atoms/PriorityPicker";
import useCustomColors from "../../hooks/useCustomColors";
import ImageBox from "./ImageBox";
import LocationButtons from "../molecules/LocatingButtons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SubmitButton } from "../atoms/SubmitButton";

interface TicketFormProps {
  titleInputProps: TicketTitleInputProps;
  contentInputProps: TicketContentInputProps;
  priorityPickerProps: PriorityPickerProps;
  submitTicket: () => void;
  goToMapScreen: (lat: number, lng: number) => void;
  pickedLocationParams: { lat: number; lng: number } | null;
  setLocationUri: React.Dispatch<React.SetStateAction<string | null>>;
  setAddress: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function TicketForm(props: TicketFormProps) {
  const t = useCustomColors();
  return (
    <ScrollView>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.ticketTitleView}>
            <TicketTitleInput
              value={props.titleInputProps.value}
              setValue={props.titleInputProps.setValue}
              maxTitleInputLength={props.titleInputProps.maxTitleInputLength}
              errMessage={props.titleInputProps.errMessage}
            />
          </View>
          <View style={styles.ticketContentView}>
            <TicketContentInput
              value={props.contentInputProps.value}
              setValue={props.contentInputProps.setValue}
              maxContentInputLength={
                props.contentInputProps.maxContentInputLength
              }
              errMessage={props.contentInputProps.errMessage}
            />
          </View>
          <View style={styles.priorityPickerView}>
            <PriorityPicker
              pickedState={props.priorityPickerProps.pickedState}
              setNormalPriority={props.priorityPickerProps.setNormalPriority}
              setHighPriority={props.priorityPickerProps.setHighPriority}
              setCriticalPriority={
                props.priorityPickerProps.setCriticalPriority
              }
            />
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
            <LocationButtons
              goToMapScreen={props.goToMapScreen}
              pickedLocationParams={props.pickedLocationParams}
              setLocationUri={props.setLocationUri}
              setAddress={props.setAddress}
            />
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
