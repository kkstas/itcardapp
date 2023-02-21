import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { Ionicons } from '@expo/vector-icons';

interface HeaderButtonProps {
  text: string;
  position: 'left' | 'right';
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  color?: string;
}

export default function HeaderButton({
  icon,
  text,
  position,
  onPress,
  color,
}: HeaderButtonProps) {
  const t = useCustomColors();
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={onPress}
    >
      {icon && position === 'left' && (
        <Ionicons
          name={icon}
          size={30}
          color={t.tint}
        />
      )}
      <Text
        style={{
          color: color || t.tint,
          marginHorizontal: icon ? 1 : 14,
          fontSize: 16,
        }}
      >
        {text}
      </Text>
      {icon && position === 'right' && (
        <Ionicons
          name={icon}
          size={30}
          color={color || t.tint}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
});
