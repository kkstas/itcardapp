import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Data } from '../atoms/ListItemContent';
import UserDataListItem from '../molecules/UserDataListItem';
import UserDataListHeader from '../molecules/UserDataListHeader';

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
	return (
		<View style={styles.container}>
			<FlatList
				ListHeaderComponent={UserDataListHeader}
				data={data}
				renderItem={({ item }) => <UserDataListItem item={item} />}
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
