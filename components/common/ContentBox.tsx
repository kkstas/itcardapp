import { View, StyleSheet, ViewStyle } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import React from 'react';

interface ContentBoxProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function ContentBox(props: ContentBoxProps) {
  const t = useCustomColors();
  return (
    <View style={[styles.container, { backgroundColor: t.bgTertiary }, props.style]}>
      {props.children}
    </View>
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
