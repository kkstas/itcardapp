import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';

export type Data = {
	id: string;
	title: string;
};
export default function ListItemContent({ item }: { item: Data }) {
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
		borderBottomWidth: 1,
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
