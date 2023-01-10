import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Data } from '../atoms/ListItemContent';
import UserDataListItem from '../molecules/UserDataListItem';
import UserDataListHeader from '../molecules/UserDataListHeader';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import useCustomColors from '../../hooks/useCustomColors';

const data: Data[] = [
	{
		id: '1',
		title: 'Arkadiusz Sokal',
	},
	{
		id: '2',
		title: 'Grzegorz Joachimiak',
	},
	{
		id: '3',
		title: 'Paweł Budziński',
	},
	{
		id: '4',
		title: 'Michał Podgruszecki',
	},
	{
		id: '5',
		title: 'Roman Słociak',
	},
	{
		id: '6',
		title: 'Patryk Gryglak',
	},
	{
		id: '7',
		title: 'Miłosz Czerw',
	},
	{
		id: '8',
		title: 'Przemysław Margas',
	},
];

export default function UserDataList() {
	const t = useCustomColors();
	const dummyData = [
		{
			id: 'asdf',
			title: 'title',
		},
		{ id: 'asdfsf', title: 'asdfsaddfawe' },
		{ id: 'fweefw', title: 'fj3849jf893jf98fj flsj' },
		{ id: 'f4f4fd', title: 'fasdfowid fjkl ajdfl ' },
	];

	const [dataState, setDataState] = useState(data);
	const [fromLeft, setFromLeft] = useState(true);

	const sliderOffset = useSharedValue(0);
	const leftColorOffset = useSharedValue(t.tint);
	const rightColorOffset = useSharedValue(t.gray2);

	const pressTicketsHandler = () => {
		setDataState(data);
		setFromLeft(true);
		sliderOffset.value = withTiming(0);
		leftColorOffset.value = withTiming(t.tint);
		rightColorOffset.value = withTiming(t.gray2);
	};
	const pressReceiptsHandler = () => {
		setDataState(dummyData);
		setFromLeft(false);
		sliderOffset.value = withTiming(1);
		leftColorOffset.value = withTiming(t.gray2);
		rightColorOffset.value = withTiming(t.tint);
	};

	return (
		<View style={styles.container}>
			<FlatList
				ListHeaderComponent={() => (
					<UserDataListHeader
						pressTicketsHandler={pressTicketsHandler}
						pressReceiptsHandler={pressReceiptsHandler}
						sliderOffset={sliderOffset}
						leftColorOffset={leftColorOffset}
						rightColorOffset={rightColorOffset}
					/>
				)}
				data={dataState}
				renderItem={({ item, index }) => (
					<UserDataListItem item={item} fromLeft={fromLeft} index={index} />
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
});
