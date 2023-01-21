import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import InfoModalContent from '../components/organisms/InfoModalContent';
import { RootStackScreenProps } from '../types';
import TicketModalContent from '../components/organisms/TicketModalContent';

export default function TicketModalScreen({
	navigation,
	route,
}: RootStackScreenProps<'TicketModal'>) {
	const data = route.params.data;

	return (
		<BlurView intensity={20} style={styles.container}>
			<TicketModalContent data={data} closeModal={() => navigation.goBack()} />
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</BlurView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
