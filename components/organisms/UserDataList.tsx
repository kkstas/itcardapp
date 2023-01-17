import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Data } from '../atoms/ListItemContent';
import UserDataListItem from '../molecules/UserDataListItem';
import UserDataListHeader from '../molecules/UserDataListHeader';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import useCustomColors from '../../hooks/useCustomColors';
import TicketDataListItem from '../molecules/TicketDataListItem';
import { TicketDataType, getAllTickets } from '../../hooks/asyncStorage';
import { useNavigation } from '@react-navigation/native';

const data: Data[] = [
	{
		id: '1',
		datetime: '07:44, 12.01.2023',
		trxType: 'Wypłata',
		trxAmount: '200.00 PLN',
		location: 'Zwycięska 14a, 53-033 Wrocław',
	},
	{
		id: '2',
		datetime: '22:01, 01.12.2022',
		trxType: 'Wypłata',
		trxAmount: '1300.00 PLN',
		location: 'Powstańców Śląskich 159, 53-139 Wrocław',
	},
	{
		id: '3',
		datetime: '09:51, 09.11.2022',
		trxType: 'Wpłata',
		trxAmount: '500.00 PLN',
		location: 'Borowska 114, 50-159 Wrocław',
	},
	{
		id: '4',
		datetime: '11:50, 22.10.2022',
		trxType: 'Wypłata',
		trxAmount: '100.00 PLN',
		location: 'CH Arkady Wrocławskie, Powstańców Śląskich 2-4, 53-333 Wrocław',
	},
	{
		id: '5',
		datetime: '10:01, 22.10.2022',
		trxType: 'Wpłata',
		trxAmount: '900.00 PLN',
		location: 'Krzycka 45A, 53-019 Wrocław',
	},
	{
		id: '6',
		datetime: '23:10, 10.09.2022',
		trxType: 'Wypłata',
		trxAmount: '150.00 PLN',
		location: 'Komandorska 147, 53-344 Wrocław',
	},
	{
		id: '7',
		datetime: '11:40, 09.09.2022',
		trxType: 'Wpłata',
		trxAmount: '550.00 PLN',
		location: 'Krzycka 45A, 53-019 Wrocław',
	},
	{
		id: '8',
		datetime: '17:41, 11.01.2021',
		trxType: 'Wypłata',
		trxAmount: '850.00 PLN',
		location: 'Zwycięska 14a, 53-033 Wrocław',
	},
	{
		id: '9',
		datetime: '11:10, 09.08.2021',
		trxType: 'Wpłata',
		trxAmount: '50.00 PLN',
		location: 'Komandorska 147, 53-344 Wrocław',
	},
	{
		id: '10',
		datetime: '15:51, 08.08.2021',
		trxType: 'Wypłata',
		trxAmount: '1500.00 PLN',
		location: 'Borowska 114, 50-159 Wrocław',
	},
];

export default function UserDataList() {
	const navigation = useNavigation();

	useEffect(() => {
		navigation.addListener('focus', () => pressTicketsHandler());
	}, []);
	const t = useCustomColors();

	const [dataState, setDataState] = useState(data);
	const [fromLeft, setFromLeft] = useState(true);

	const sliderOffset = useSharedValue(0);
	const leftColorOffset = useSharedValue(t.tint);
	const rightColorOffset = useSharedValue(t.gray2);

	const pressTicketsHandler = async () => {
		const mydata = await getAllTickets();
		setDataState(mydata);
		setFromLeft(true);
		sliderOffset.value = withTiming(0);
		leftColorOffset.value = withTiming(t.tint);
		rightColorOffset.value = withTiming(t.gray2);
	};
	const pressReceiptsHandler = () => {
		setDataState(data);
		setFromLeft(false);
		sliderOffset.value = withTiming(1);
		leftColorOffset.value = withTiming(t.gray2);
		rightColorOffset.value = withTiming(t.tint);
	};

	const ItemForRender = ({
		item,
		fromLeft,
		index,
	}: {
		item: any;
		fromLeft: boolean;
		index: any;
	}) => {
		if (fromLeft) {
			return <TicketDataListItem item={item} fromLeft={true} index={index} />;
		} else {
			return <UserDataListItem item={item} fromLeft={false} index={index} />;
		}
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
					<ItemForRender item={item} fromLeft={fromLeft} index={index} />
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
