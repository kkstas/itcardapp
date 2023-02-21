import useCustomColors from '../../../../../hooks/useCustomColors';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Layout from '../../../../../constants/Layout';
import { useAppDispatch } from '../../../../../hooks/reduxHooks';
import { setPriority } from '../../../ticketFormSlice';
import { memo } from 'react';

function PriorityPicker() {
  const t = useCustomColors();
  const dispatch = useAppDispatch();

  const windowWidth = Layout.window.width;
  const offset = useSharedValue(windowWidth / -3.4);
  const leftColorOffset = useSharedValue(t.tint);
  const midColorOffset = useSharedValue(t.labelSecondary);
  const rightColorOffset = useSharedValue(t.labelSecondary);

  const slidingBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const leftPressHandler = () => {
    offset.value = withTiming(windowWidth / -3.4);
    leftColorOffset.value = withTiming(t.tint);
    midColorOffset.value = withTiming(t.labelSecondary);
    rightColorOffset.value = withTiming(t.labelSecondary);
    dispatch(setPriority({ priority: 'normal' }));
  };
  const midPressHandler = () => {
    offset.value = withTiming(0);
    leftColorOffset.value = withTiming(t.labelSecondary);
    midColorOffset.value = withTiming(t.tint);
    rightColorOffset.value = withTiming(t.labelSecondary);
    dispatch(setPriority({ priority: 'high' }));
  };
  const rightPressHandler = () => {
    offset.value = withTiming(windowWidth / 3.4);
    leftColorOffset.value = withTiming(t.labelSecondary);
    midColorOffset.value = withTiming(t.labelSecondary);
    rightColorOffset.value = withTiming(t.pink);
    dispatch(setPriority({ priority: 'critical' }));
  };

  const leftTextStyle = useAnimatedStyle(() => {
    return {
      color: leftColorOffset.value,
    };
  });
  const midTextStyle = useAnimatedStyle(() => {
    return {
      color: midColorOffset.value,
    };
  });
  const rightTextStyle = useAnimatedStyle(() => {
    return {
      color: rightColorOffset.value,
    };
  });

  return (
    <View>
      <Text style={[styles.inputLabel, { color: t.labelSecondary }]}>
        Priorytet
      </Text>
      <View style={[styles.container, { backgroundColor: t.textInput }]}>
        <Animated.View
          style={[
            styles.slidingBox,
            { width: windowWidth / 3.1, backgroundColor: t.bgSecondary },
            slidingBoxStyle,
          ]}
        />
        <Pressable
          onPress={leftPressHandler}
          style={[styles.PView, { left: 0, width: windowWidth / 2.8 }]}>
          <Animated.Text
            style={[styles.normalP, { color: t.text }, leftTextStyle]}>
            Normalny
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
            style={[styles.highP, { color: t.text }, midTextStyle]}>
            Wysoki
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
            style={[styles.criticalP, { color: t.text }, rightTextStyle]}>
            Krytyczny
          </Animated.Text>
        </Pressable>
      </View>
    </View>
  );
}

export default memo(PriorityPicker);

const styles = StyleSheet.create({
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
