import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import useCustomColors from '../hooks/useCustomColors';
import { BlurView } from 'expo-blur';
import InfoModalContent from '../components/organisms/InfoModalContent';
import { RootStackScreenProps } from '../types';

export default function InfoModalScreen({
	navigation,
}: RootStackScreenProps<'InfoModal'>) {
	const t = useCustomColors();

	return (
		<BlurView
			intensity={40}
			tint={t.theme === 'dark' ? 'dark' : 'light'}
			style={styles.container}
		>
			<InfoModalContent
				appTitle="asdf"
				appDescription="asdf"
				closeModal={() => navigation.goBack()}
			/>
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</BlurView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
	},
});
