import {
  Text,
  Keyboard,
  ScrollView,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import TicketTitleInput, {
  TicketTitleInputProps,
} from './inputs/TicketTitleInput';
import TicketContentInput, {
  TicketContentInputProps,
} from './inputs/TicketContentInput';
import PriorityPicker from './inputs/PriorityPicker';
import useCustomColors from '../../../../hooks/useCustomColors';
import MediaContainer from './media/MediaContainer';
import LocationButtons from './location/LocatingButtons';
import { SubmitButton } from './SubmitButton';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { memo } from 'react';

interface TicketFormProps {
  titleInputProps: TicketTitleInputProps;
  contentInputProps: TicketContentInputProps;
  submitTicket: () => void;
  goToMapScreen: (lat: number, lng: number) => void;
}

function TicketForm(props: TicketFormProps) {
  const t = useCustomColors();
  return (
    <ScrollView>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Animated.View
            entering={FadeInRight.delay(150)}
            style={styles.ticketTitleView}>
            <TicketTitleInput
              maxTitleInputLength={props.titleInputProps.maxTitleInputLength}
              errMessage={props.titleInputProps.errMessage}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInRight.delay(270)}
            style={styles.ticketContentView}>
            <TicketContentInput
              maxContentInputLength={
                props.contentInputProps.maxContentInputLength
              }
              errMessage={props.contentInputProps.errMessage}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInRight.delay(390)}
            style={styles.priorityPickerView}>
            <PriorityPicker />
          </Animated.View>
          <Animated.View
            entering={FadeInRight.delay(520)}
            style={styles.addMedia}>
            <Text style={[styles.inputLabel, { color: t.labelSecondary }]}>
              Dołącz media
            </Text>
            <MediaContainer />
          </Animated.View>
          <Animated.View
            entering={FadeInRight.delay(650)}
            style={styles.addLocation}>
            <Text style={[styles.inputLabel, { color: t.labelSecondary }]}>
              Dołącz lokalizację
            </Text>
            <LocationButtons goToMapScreen={props.goToMapScreen} />
          </Animated.View>
          <SubmitButton
            submitText="Wyślij zgłoszenie"
            onPress={props.submitTicket}
          />
        </View>
      </Pressable>
    </ScrollView>
  );
}

export default memo(TicketForm);

const styles = StyleSheet.create({
  btnText: {
    fontSize: 16,
    color: '#fff',
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 8,
    width: '100%',
    height: 35,
    backgroundColor: '#39405a',
  },
  addLocation: {},
  pickMediaView: {},
  inputLabel: {
    paddingLeft: 8,
    paddingBottom: 2,
    fontWeight: '400',
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
    justifyContent: 'flex-start',
  },
});
