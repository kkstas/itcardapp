import useCustomColors from '../../../../../hooks/useCustomColors';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks';
import { setContent } from '../../../ticketFormSlice';

export interface TicketContentInputProps {
  maxContentInputLength: number;
  errMessage: string | null;
}

function TicketContentInput({
  errMessage,
  maxContentInputLength,
}: TicketContentInputProps) {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.ticketData.content);
  const t = useCustomColors();
  const [isFocused, setIsFocused] = useState(false);

  const contentChangeHandler = (content: string) => {
    dispatch(setContent({ content: content }));
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
        Opis zgłoszenia
      </Text>
      <View style={styles.contentView}>
        <TextInput
          value={content}
          autoComplete="off"
          autoCapitalize="sentences"
          autoCorrect={false}
          multiline={true}
          maxLength={maxContentInputLength}
          onFocus={focusHandler}
          onBlur={blurHandler}
          selectionColor={t.tint}
          onChangeText={contentChangeHandler}
          style={[
            styles.contentInput,
            { backgroundColor: t.textInput, color: t.text },
          ]}
        />
      </View>
      {errMessage && (
        <View style={styles.errorView}>
          <Ionicons name="warning-outline" color={t.negativeLabel} size={13} />
          <Text style={[styles.errorMessage, { color: t.negativeLabel }]}>
            {errMessage}
          </Text>
        </View>
      )}
    </View>
  );
}

export default memo(TicketContentInput);

const styles = StyleSheet.create({
  contentView: {
    justifyContent: 'flex-start',
  },
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
  inputLabel: {
    paddingLeft: 8,
    paddingBottom: 2,
    fontWeight: '400',
    fontSize: 18,
  },
  contentInput: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 16,
    textAlignVertical: 'top',
    minHeight: 100,
  },
});
