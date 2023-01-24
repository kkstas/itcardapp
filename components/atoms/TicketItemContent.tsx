import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import useCustomColors from '../../hooks/useCustomColors';
import { TicketDataType } from '../../hooks/asyncStorage';
import { Ionicons } from '@expo/vector-icons';

export default function TicketItemContent({
	item,
	goToTicketModal,
}: {
	item: TicketDataType;
	goToTicketModal: () => void;
}) {
	const t = useCustomColors();
	const date = new Date(item.id).toLocaleString();

	const priorityDisplay = {
		text:
			item.priority === 'critical'
				? 'Krytyczny'
				: item.priority === 'high'
				? 'Wysoki'
				: 'Normalny',
		color:
			item.priority === 'critical'
				? t.red
				: item.priority === 'high'
				? t.tintTapState
				: t.labelSecondary,
	};

	return (
		<View style={[s.itemContainer, { borderBottomColor: t.separator }]}>
			<View style={[s.avatarContainer, { backgroundColor: t.fillSecondary }]}>
				{item.thumbnailUri ? (
					<Image
						source={{ uri: item.thumbnailUri }}
						style={s.img}
					/>
				) : item.locationUri ? (
					<Image
						source={{ uri: item.locationUri }}
						style={s.img}
					/>
				) : (
					<Text></Text>
				)}
			</View>
			<View style={[s.contentContainer]}>
				<View style={{ flexDirection: 'row' }}>
					<Text style={[s.priorityText, { color: t.labelSecondary }]}>Priorytet:</Text>
					<Text
						style={[s.priorityText, { color: priorityDisplay.color, paddingLeft: 2 }]}
					>
						{priorityDisplay.text}
					</Text>
				</View>
				<Text style={[s.title, { color: t.text }]}>{item.title}</Text>
				{item.address && (
					<View style={{ alignItems: 'center', flexDirection: 'row' }}>
						<Ionicons
							name='navigate-circle-outline'
							size={10}
							color={t.labelSecondary}
							style={{ paddingRight: 2 }}
						/>
						<Text style={[s.dateText, { color: t.labelSecondary }]}>{item.address}</Text>
					</View>
				)}
				<View style={{ alignItems: 'center', flexDirection: 'row' }}>
					<Ionicons
						name='time-outline'
						size={10}
						color={t.labelSecondary}
						style={{ paddingRight: 2 }}
					/>
					<Text style={[s.dateText, { color: t.labelSecondary }]}>{date}</Text>
				</View>
			</View>
			<TouchableOpacity
				style={s.btn}
				onPress={goToTicketModal}
			>
				<Ionicons
					name='information-circle-outline'
					size={22}
					color={t.tint}
				/>
			</TouchableOpacity>
		</View>
	);
}

const s = StyleSheet.create({
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 10,
	},
	priorityText: {
		fontSize: 7,
		paddingLeft: 1,
	},
	img: {
		borderRadius: 25,
		width: 50,
		height: 50,
	},
	contentContainer: {
		flexDirection: 'column',
		paddingBottom: 8,
		paddingLeft: 14,
		width: '78%',
	},
	dateText: {
		fontSize: 10,
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
