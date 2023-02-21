import { StyleSheet, Pressable, View, Text } from 'react-native';
import useCustomColors from '../../../hooks/useCustomColors';
import { ThemePreference } from '../asyncStorageHandler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Layout from '../../../constants/Layout';
import ThemeDescription from './ThemeDescription';
import themeText from '../../../constants/Themes';
import { useEffect } from 'react';

interface ThemePickerProps {
  setTheme: (theme: ThemePreference) => void;
  asyncThemeState: ThemePreference;
}

export default function ThemePicker({
  setTheme,
  asyncThemeState,
}: ThemePickerProps) {
  const t = useCustomColors();
  const windowWidth = Layout.window.width;
  const offset = useSharedValue(windowWidth);

  // useEffect żeby slider się ustawiał zawsze na rzeczywistą pozycję
  useEffect(() => {
    if (asyncThemeState === 'light') {
      leftPressHandler();
    } else if (asyncThemeState === 'dark') {
      rightPressHandler();
    } else {
      midPressHandler();
    }
  }, []);

  const slidingBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const leftPressHandler = () => {
    setTheme('light');
    offset.value = withTiming(windowWidth / -3.4);
  };
  const midPressHandler = () => {
    setTheme('default');
    offset.value = withTiming(0);
  };
  const rightPressHandler = () => {
    setTheme('dark');
    offset.value = withTiming(windowWidth / 3.4);
  };

  return (
    <View style={[styles.mainBox, { borderColor: t.gray3 }]}>
      <Text style={[styles.textLabel, { color: t.labelPrimary }]}>
        Wybór motywu:
      </Text>
      <View style={[styles.container, { backgroundColor: t.textInput }]}>
        <Animated.View
          style={[
            styles.slidingBox,
            { width: windowWidth / 3.1, backgroundColor: t.bgPrimary },
            slidingBoxStyle,
          ]}
        />
        <Pressable
          onPress={leftPressHandler}
          style={[styles.PView, { left: 0, width: windowWidth / 2.8 }]}>
          <Animated.Text
            style={[
              styles.normalP,
              { color: asyncThemeState === 'light' ? t.tint : t.text },
            ]}>
            Jasny
          </Animated.Text>
        </Pressable>
        <View
          style={[
            styles.divider,
            { backgroundColor: t.labelSecondary, left: windowWidth / 7 },
          ]}
        />
        <Pressable
          onPress={midPressHandler}
          style={[styles.PView, { width: windowWidth / 3.4 }]}>
          <Animated.Text
            style={[
              styles.highP,
              { color: asyncThemeState === 'default' ? t.tint : t.text },
            ]}>
            Domyślny
          </Animated.Text>
        </Pressable>
        <View
          style={[
            styles.divider,
            { backgroundColor: t.labelSecondary, right: windowWidth / 7 },
          ]}
        />
        <Pressable
          onPress={rightPressHandler}
          style={[styles.PView, { right: 0, width: windowWidth / 2.9 }]}>
          <Animated.Text
            style={[
              styles.criticalP,
              { color: asyncThemeState === 'dark' ? t.tint : t.text },
            ]}>
            Ciemny
          </Animated.Text>
        </Pressable>
      </View>
      {asyncThemeState === 'dark' && <ThemeDescription text={themeText.dark} />}

      {asyncThemeState === 'light' && (
        <ThemeDescription text={themeText.light} />
      )}
      {asyncThemeState === 'default' && (
        <ThemeDescription text={themeText.default} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 18,
    paddingLeft: 12,
    fontWeight: '300',
    paddingTop: 10,
    paddingBottom: 4,
  },
  mainBox: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
  },
  content: {
    marginTop: 10,
  },
  slidingBox: {
    position: 'absolute',
    height: '80%',
    borderRadius: 7,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  divider: {
    height: '55%',
    width: 0.5,
    opacity: 0.5,
    zIndex: 0,
  },
  criticalP: {
    zIndex: 4,
  },
  PView: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 4,
  },
  highP: {
    zIndex: 4,
  },
  normalP: {
    zIndex: 4,
  },
  inputLabel: {
    paddingLeft: 8,
    paddingBottom: 2,
    fontWeight: '400',
    fontSize: 18,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 34,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
