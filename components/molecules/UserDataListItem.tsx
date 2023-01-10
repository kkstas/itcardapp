import React from 'react';
import { StyleSheet, View, Dimensions, Alert } from 'react-native';
import Animated, {
	useSharedValue,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	withSpring,
	withTiming,
	FadeIn,
	SlideInDown,
	SlideInLeft,
	SlideInRight,
	SlideOutRight,
	SlideOutLeft,
} from 'react-native-reanimated';
import {
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { springConfig, timingConfig } from '../../animations/UserDataListAnimationConfig';

import DeleteListButton from '../atoms/DeleteListButton';
import ListItemContent, { Data } from '../atoms/ListItemContent';
import useCustomColors from '../../hooks/useCustomColors';

const windowDimensions = Dimensions.get('window');
const BUTTON_WIDTH = 80;
const MAX_TRANSLATE = -BUTTON_WIDTH;

type ListItemProps = {
	item: Data;
	fromLeft: boolean;
	index: number;
};
export default function UserDataListItem({ item, fromLeft, index }: ListItemProps) {
	const isRemoving = useSharedValue(false);
	const translateX = useSharedValue(0);
	const t = useCustomColors();

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
				translateX.value = withSpring(MAX_TRANSLATE, springConfig(evt.velocityX));
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
			'Czy napewno usunąć ten element?',
			'Po usunięciu nie będzie można przywrócić elementu',
			[
				{ text: 'Usuń', onPress: () => (isRemoving.value = true), style: 'destructive' },
				{
					text: 'Anuluj',
					style: 'cancel',
					onPress: () => (translateX.value = withTiming(0, timingConfig)),
				},
			]
		);
		// isRemoving.value = true;
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

	return (
		<Animated.View
			style={styles.item}
			entering={(fromLeft ? SlideInLeft : SlideInRight).delay(index * 50)}
			exiting={(fromLeft ? SlideOutLeft : SlideOutRight).delay(index * 50)}
		>
			<PanGestureHandler activeOffsetX={[-10, 10]} onGestureEvent={handler}>
				<Animated.View style={stylesAnimation}>
					<ListItemContent item={item} />

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
