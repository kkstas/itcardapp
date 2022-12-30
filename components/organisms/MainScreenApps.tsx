import { Text, View, StyleSheet } from 'react-native';
import TicketButton from '../molecules/TicketButton';
import AllTicketsButton from '../molecules/AllTicketsButton';
import useCustomColors from '../../hooks/useCustomColors';

export default function MainScreenApps() {
	const t = useCustomColors();
	return (
		<>
			<Text style={[styles.textApp, { color: t.labelSecondary }]}>Skróty aplikacji:</Text>
			<TicketButton />
			<AllTicketsButton />
		</>
	);
}

const styles = StyleSheet.create({
	container: {},

	textApp: {
		marginTop: 25,
		marginLeft: 15,
		width: '85%',
		fontSize: 22,
		fontWeight: '400',
		paddingBottom: 7,
	},
});
