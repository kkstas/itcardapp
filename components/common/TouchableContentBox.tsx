import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import React from 'react';

interface TouchableContentBoxProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

export default function TouchableContentBox(props: TouchableContentBoxProps) {
  const t = useCustomColors();
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: t.bgTertiary }, props.style]}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '93%',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
});
