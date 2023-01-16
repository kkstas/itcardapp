import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { TicketDataType } from '../../hooks/asyncStorage';

export default function TicketItemContent({ item }: { item: TicketDataType }) {
	const t = useCustomColors();
	const date = new Date(item.id).toLocaleDateString();
	return (
		<View style={[s.itemContainer, { borderBottomColor: t.separator }]}>
			<View style={[s.avatarContainer, { backgroundColor: t.fillSecondary }]}>
				{item.thumbnailUri ? (
					<Image source={{ uri: item.thumbnailUri }} style={s.img} />
				) : (
					<Text style={[s.avatarText, { color: t.text }]}></Text>
				)}
			</View>
			<View style={[s.contentContainer]}>
				<Text style={[s.dateText, { color: t.labelPrimary }]}>{date}</Text>
				<Text style={[s.title, { color: t.text }]}>{item.title}</Text>
			</View>
		</View>
	);
}

const s = StyleSheet.create({
	img: {
		borderRadius: 25,
		width: 50,
		height: 50,
	},
	contentContainer: {
		flexDirection: 'column',
		paddingLeft: 10,
	},
	dateText: {
		fontSize: 11,
	},
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
	},
});
