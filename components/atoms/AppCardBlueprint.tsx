import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import TouchableContentBox from './TouchableContentBox';

interface AppCardBlueprintProps {
  title: string;
  content: string;
  icon: keyof typeof Ionicons.glyphMap;
  showLearnMore: boolean;
  learnMoreHandler?: () => void;
  pressHandler?: () => void;
}
/**
 *
 * @param title - string title
 * @param content - string content describing app
 * @param icon - name of icon from Ionicons (string)
 * @param showLearnMore - boolean whether show or not the learn more button
 * @param learnMoreHandler (optional) - function handling learn more onPress
 * @param pressHandler (optional) - function handling onPress action
 * @returns
 */
export default function AppCardBlueprint({
  title,
  content,
  icon,
  showLearnMore,
  learnMoreHandler,
  pressHandler,
}: AppCardBlueprintProps) {
  const t = useCustomColors();
  return (
    <TouchableContentBox style={styles.container} onPress={pressHandler}>
      <View style={styles.leftView}>
        <LinearGradient
          colors={[t.fillTertiary, t.fillQuaternary]}
          style={styles.iconView}
        >
          <Ionicons name={icon} size={28} color={t.tint} />
        </LinearGradient>
      </View>
      <View style={styles.rightView}>
        <Text style={[styles.titleText, { color: t.text }]}>{title}</Text>
        <Text style={[styles.contentText, { color: t.labelSecondary }]}>{content}</Text>
        <View style={styles.buttonsView}>
          {showLearnMore && (
            <TouchableOpacity style={styles.learnMoreView} onPress={learnMoreHandler}>
              <Text style={[styles.learnMoreText, { color: t.tint }]}>
                Dowiedz się więcej...
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.chevron} onPress={pressHandler}>
        <Ionicons name="chevron-forward-outline" size={25} color={t.tint} />
      </TouchableOpacity>
    </TouchableContentBox>
  );
}

const styles = StyleSheet.create({
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 18,
  },
  bottomButton: {},
  chevron: {
    justifyContent: 'center',
    marginBottom: 12,
  },
  learnMoreText: {
    fontSize: 11,
    paddingTop: 3,
    paddingBottom: 15,
  },
  learnMoreView: {},
  iconView: {
    borderRadius: 10,
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 13,
    lineHeight: 16,
    paddingRight: 2,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 2,
  },
  leftView: {
    flex: 2,
  },
  rightView: {
    flex: 10,
    paddingLeft: 8,
  },
  container: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 0,
    paddingLeft: 14,
    paddingRight: 4,
    marginBottom: 12,
  },
});
