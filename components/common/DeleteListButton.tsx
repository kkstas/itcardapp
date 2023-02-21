import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ButtonData = {
  title: string;
  backgroundColor: string;
  color: string;
  onPress: () => void;
  windowWidth: number;
  BUTTON_WIDTH: number;
};

/**
 * component created for animated lists (ticket and receiept data)
 * @param item of type ButtonData 
 * @returns 
 */
export default function DeleteListButton({ item }: { item: ButtonData }) {
  return (
    <View
      style={[
        s.button,
        {
          backgroundColor: item.backgroundColor,
          width: item.windowWidth,
          paddingRight: item.windowWidth - item.BUTTON_WIDTH,
        },
      ]}
    >
      <TouchableOpacity
        onPress={item.onPress}
        style={[s.buttonInner, { width: item.BUTTON_WIDTH }]}
      >
        <Text style={{ color: item.color }}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInner: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
