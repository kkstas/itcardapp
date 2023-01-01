import { RootTabScreenProps } from '../types';
import MainScreenTemplate from '../components/templates/MainScreenTemplate';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
	function navigateToProfile() {
		navigation.navigate('TabThree');
	}
	return <MainScreenTemplate navigateToProfile={navigateToProfile} />;
}
