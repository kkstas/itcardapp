import { TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';

interface SmallButtonWithIconProps {
  text: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle
}
/**
 *
 * @param text - text inside button
 * @param icon - name of Ionicons icon
 * @param onPress - press handler function
 * @returns lightly styled button with icon and text
 */
export default function SmallButtonWithIcon({
  text,
  icon,
  onPress,
  style,
  textStyle
}: SmallButtonWithIconProps) {
  const t = useCustomColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.goButton, { backgroundColor: t.bgSecondary }, style]}
    >
      {icon && <Ionicons name={icon} color={t.text} size={20} />}
      <Text style={[styles.goButtonText, { color: t.text }, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingVertical: 9,
    borderRadius: 10,
  },
  goButtonText: {
    marginLeft: 5,
    fontWeight: '500',
  },
  text: {},
});
