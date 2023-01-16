import { StyleSheet, Pressable, Text, View } from 'react-native';
import useCustomColors from '../hooks/useCustomColors';

import {
	TicketDataType,
	addNewTicket,
	getAllTickets,
	removeSingleItem,
} from '../hooks/asyncStorage';
import { useEffect, useState } from 'react';

export default function LocateATMScreen() {
	const t = useCustomColors();

	const [myTicketData, setMyTicketData] = useState<TicketDataType[] | null>(null);

	useEffect(() => {
		const x = async () => {
			const data = await getAllTickets();
			setMyTicketData(data);
		};
		x();
	}, []);

	function removeItemHandler(ticketId: number) {
		removeSingleItem(ticketId);
		setMyTicketData((prevData) => prevData && prevData.filter((t) => t.id != ticketId));
	}

	return (
		<View style={[styles.container, { backgroundColor: t.tint }]}>
			<Pressable
				onPress={() =>
					addNewTicket({
						id: Date.now(),
						title: 'lastKRAMSES christmas',
						content: 'FLKJASDFi gave u my heart',
						media: 'media UELurl',
						thumbnailUri: 'thumURLbnail url',
					})
				}
				style={{ width: 40, height: 40, backgroundColor: 'red' }}
			/>
			<Pressable
				onPress={getAllTickets}
				style={{ width: 40, height: 40, backgroundColor: 'green' }}
			/>
			<Pressable
				onPress={() => removeSingleItem(1673861008899)}
				style={{ width: 40, height: 80, backgroundColor: 'blue' }}
			/>
			<View style={{ margin: 15 }}>
				{myTicketData &&
					myTicketData.map((ticket) => {
						return (
							<View key={ticket.id} style={{ padding: 20 }}>
								<Text>TICKET ID : {ticket.id}</Text>
								<Text>TITLE: {ticket.title}</Text>
								<Text>CONTENT: {ticket.content}</Text>
								<Text>URL : {ticket.media}</Text>
								<Pressable
									style={{ width: 40, height: 40, backgroundColor: 'red' }}
									onPress={() => removeItemHandler(ticket.id)}
								/>
							</View>
						);
					})}
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
