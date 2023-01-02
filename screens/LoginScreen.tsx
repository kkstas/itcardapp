import { View } from 'react-native';
import { RootStackScreenProps } from '../types';
import LoginScreenTemplate from '../components/templates/LoginScreenTemplate';

export default function LoginScreen({ navigation }: RootStackScreenProps<'LoginScreen'>) {
	return (
		<View style={{ height: '100%' }}>
			<LoginScreenTemplate navigateToProfile={() => navigation.navigate('Root')} />
		</View>
	);
}
