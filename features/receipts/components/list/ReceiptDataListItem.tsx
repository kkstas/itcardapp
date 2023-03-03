import React from 'react';
import { StyleSheet, Dimensions, Alert } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  withTiming,
  SlideInLeft,
  SlideOutLeft,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {
  springConfig,
  timingConfig,
} from '../../../../components/animations/UserDataListAnimationConfig';

import DeleteListButton from '../../../../components/common/DeleteListButton';
import ListItemContent from './ListItemContent';
import useCustomColors from '../../../../hooks/useCustomColors';
import { useNavigation } from '@react-navigation/native';

import { removeSingleReceipt, IReceiptState } from '../../asyncStorageHandler';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { removeReceipt } from '../../../../store/slices/documentsData';

const windowDimensions = Dimensions.get('window');
const BUTTON_WIDTH = 80;
const MAX_TRANSLATE = -BUTTON_WIDTH;

type ListItemProps = {
  item: IReceiptState;
  index: number;
};
export default function ReceiptDataListItem({ item, index }: ListItemProps) {
  const isRemoving = useSharedValue(false);
  const translateX = useSharedValue(0);
  const t = useCustomColors();
  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  type AnimatedGHContext = {
    startX: number;
  };
  const handler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (_evt, ctx) => {
      ctx.startX = translateX.value;
    },

    onActive: (evt, ctx) => {
      const nextTranslate = evt.translationX + ctx.startX;
      translateX.value = Math.min(0, Math.max(nextTranslate, MAX_TRANSLATE));
    },

    onEnd: (evt) => {
      if (evt.velocityX < -20) {
        translateX.value = withSpring(
          MAX_TRANSLATE,
          springConfig(evt.velocityX)
        );
      } else {
        translateX.value = withSpring(0, springConfig(evt.velocityX));
      }
    },
  });

  const stylesAnimation = useAnimatedStyle(() => {
    if (isRemoving.value) {
      return {
        height: withTiming(0, timingConfig),
        transform: [
          {
            translateX: withTiming(-windowDimensions.width, timingConfig),
          },
        ],
      };
    }

    return {
      height: 78,
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  function handleRemove() {
    Alert.alert(
      'Czy napewno chcesz usunąć ten element?',
      'Po usunięciu nie będzie można go przywrócić',
      [
        {
          text: 'Usuń',
          onPress: () => {
            isRemoving.value = true;
            removeSingleReceipt(item.id);
            dispatch(removeReceipt(item.id));
          },
          style: 'destructive',
        },
        {
          text: 'Anuluj',
          style: 'cancel',
          onPress: () => (translateX.value = withTiming(0, timingConfig)),
        },
      ]
    );
  }

  const removeButton = {
    title: 'Usuń',
    backgroundColor: t.pink,
    color: 'white',
    onPress: handleRemove,
    windowWidth: windowDimensions.width,
    BUTTON_WIDTH: BUTTON_WIDTH,
  };

  const removeButtonColor = useAnimatedStyle(() => {
    return {
      opacity: translateX.value === 0 ? 0 : 1,
    };
  });

  const goToReceiptModal = () => {
    if (translateX.value === 0) {
      navigation.navigate('ReceiptModal', { data: item });
    }
  };

  return (
    <Animated.View
      style={styles.item}
      entering={SlideInLeft.delay(index * 50)}
      exiting={SlideOutLeft.delay(index * 50)}
    >
      <PanGestureHandler
        activeOffsetX={[-10, 10]}
        onGestureEvent={handler}
      >
        <Animated.View style={stylesAnimation}>
          <ListItemContent
            goToReceiptModal={goToReceiptModal}
            item={item}
          />

          <Animated.View style={[styles.buttonsContainer, removeButtonColor]}>
            <DeleteListButton item={removeButton} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
  },

  buttonsContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: windowDimensions.width,
    width: windowDimensions.width,
  },
});
