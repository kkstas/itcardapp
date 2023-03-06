import { Easing } from 'react-native-reanimated';

export const springConfig = (velocity: number) => {
  'worklet';

  return {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    velocity,
  };
};

export const timingConfig = {
  duration: 400,
  easing: Easing.bezierFn(0.25, 0.1, 0.25, 1),
};
