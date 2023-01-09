import { TabTwoMainStackScreenProps } from '../types';
import MainScreenTemplate from '../components/templates/MainScreenTemplate';

export default function TabTwoScreen({
	navigation,
}: TabTwoMainStackScreenProps<'TabTwoScreen'>) {
	function navigateToProfile() {
		navigation.navigate('Root', { screen: 'TabThree' });
	}
	function navigateToInfo() {
		navigation.navigate('InfoModal');
	}

	function navigateToTicket() {
		navigation.navigate('CreateTicketScreen');
	}

	function navigateToScanReceipt() {
		navigation.navigate('ScanReceiptScreen');
	}

	function navigateToLocateATM() {
		navigation.navigate('LocateATMScreen');
	}

	return (
		<MainScreenTemplate
			navigateToInfo={navigateToInfo}
			navigateToProfile={navigateToProfile}
			navigateToTicket={navigateToTicket}
			navigateToScanReceipt={navigateToScanReceipt}
			navigateToLocateATM={navigateToLocateATM}
		/>
	);
}
