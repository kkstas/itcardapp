import useCustomColors from '../../hooks/useCustomColors';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setTitle } from '../../store/slices/ticketData';

export interface TicketTitleInputProps {
  maxTitleInputLength: number;
  errMessage: string | null;
}

const TicketTitleInput = memo(
  ({ errMessage, maxTitleInputLength }: TicketTitleInputProps) => {
    const title = useAppSelector((state) => state.ticketData.title);
    const dispatch = useAppDispatch();
    const t = useCustomColors();
    const [isFocused, setIsFocused] = useState(false);

    const titleChangeHandler = (title: string) => {
      dispatch(setTitle({ title: title }));
    };

    const focusHandler = () => setIsFocused(true);
    const blurHandler = () => setIsFocused(false);

    return (
      <View>
        <Text
          style={[
            styles.inputLabel,
            { color: isFocused ? t.tint : t.labelSecondary },
          ]}>
          Tytuł zgłoszenia
        </Text>
        <View style={{ justifyContent: 'center' }}>
          <TextInput
            value={title}
            autoComplete="off"
            autoCapitalize="sentences"
            autoCorrect={false}
            maxLength={maxTitleInputLength}
            onFocus={focusHandler}
            onBlur={blurHandler}
            onChangeText={titleChangeHandler}
            selectionColor={t.tint}
            style={[
              styles.loginInput,
              {
                backgroundColor: t.textInput,
                color: t.text,
              },
            ]}
          />
        </View>
        {errMessage && (
          <View style={styles.errorView}>
            <Ionicons
              name="warning-outline"
              color={t.negativeLabel}
              size={13}
            />
            <Text style={[styles.errorMessage, { color: t.negativeLabel }]}>
              {errMessage}
            </Text>
          </View>
        )}
      </View>
    );
  }
);

export default TicketTitleInput;

const styles = StyleSheet.create({
  errorView: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    paddingTop: 3,
  },
  errorMessage: {
    fontSize: 11,
    paddingLeft: 3,
  },
  logo: {
    position: 'absolute',
    left: 5,
    padding: 5,
  },
  inputLabel: {
    paddingLeft: 8,
    paddingBottom: 2,
    fontWeight: '400',
    fontSize: 18,
  },
  loginInput: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 16,
    textAlignVertical: 'top',
  },
});
