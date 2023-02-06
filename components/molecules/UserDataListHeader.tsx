import { View, StyleSheet, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Layout from '../../constants/Layout';
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useHeaderHeight } from '@react-navigation/elements';

interface UserDataListHeaderProps {
  pressTicketsHandler: () => void;
  pressReceiptsHandler: () => void;
  sliderOffset: SharedValue<number>;
  leftColorOffset: SharedValue<string>;
  rightColorOffset: SharedValue<string>;
}

export default function UserDataListHeader({
  pressTicketsHandler,
  pressReceiptsHandler,
  sliderOffset,
  leftColorOffset,
  rightColorOffset,
}: UserDataListHeaderProps) {
  const t = useCustomColors();
  const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);
  const headerHeight = useHeaderHeight();

  const animateLeftStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: 1 - 0.1 * sliderOffset.value }],
    };
  });
  const animateRightStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: 1 - 0.1 * (1 - sliderOffset.value) }],
    };
  });

  const animatedLeftColor = useAnimatedStyle(() => {
    return {
      color: leftColorOffset.value,
    };
  });

  const animatedRightColor = useAnimatedStyle(() => {
    return {
      color: rightColorOffset.value,
    };
  });

  const sliderAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: ((sliderOffset.value - 0.5) * Layout.window.width) / 2.5,
        },
      ],
    };
  });

  const ticketBtnAction = () => {
    pressTicketsHandler();
  };

  const receiptBtnAction = () => {
    pressReceiptsHandler();
  };

  return (
    <View style={[styles.container, { paddingTop: headerHeight }]}>
      <TouchableOpacity onPress={ticketBtnAction} style={[styles.box]}>
        <Animated.View style={[styles.boxContent, animateLeftStyle]}>
          <AnimatedIcon
            name="layers-outline"
            size={30}
            style={animatedLeftColor}
          />
          <Animated.Text style={[styles.btnText, animatedLeftColor]}>
            Twoje{'\n'} zgłoszenia
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity onPress={receiptBtnAction} style={[styles.box]}>
        <Animated.View style={[styles.boxContent, animateRightStyle]}>
          <AnimatedIcon
            name="receipt-outline"
            size={30}
            style={animatedRightColor}
          />
          <Animated.Text style={[styles.btnText, animatedRightColor]}>
            Twoje{'\n'} pokwitowania
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
      <Animated.View
        style={[styles.slider, { borderBottomColor: t.tint }, sliderAnimation]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    width: Layout.window.width / 4,
    position: 'absolute',
    borderBottomWidth: StyleSheet.hairlineWidth,
    bottom: 0,
  },
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
  },
  box: {
    width: Layout.window.width / 2.5,
    paddingVertical: 8,
  },
  boxContent: {
    alignItems: 'center',
  },
  btnText: {
    paddingTop: 5,
    letterSpacing: 0.4,
    textAlign: 'center',
  },
});
