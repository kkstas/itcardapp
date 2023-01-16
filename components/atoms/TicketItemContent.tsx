import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { TicketDataType } from '../../hooks/asyncStorage';

export default function TicketItemContent({ item }: { item: TicketDataType }) {
	const t = useCustomColors();
	return (
		<View style={[s.itemContainer, { borderBottomColor: t.separator }]}>
			<View style={[s.avatarContainer, { backgroundColor: t.fillPrimary }]}>
				<Text style={[s.avatarText, { color: t.text }]}>{item.title[0]}</Text>
			</View>
			<Text style={[s.title, { color: t.text }]}>{item.title}</Text>
		</View>
	);
}

const s = StyleSheet.create({
	itemContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 8,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	avatarContainer: {
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatarText: {
		fontSize: 18,
	},
	title: {
		fontSize: 18,
		marginLeft: 16,
	},
});
