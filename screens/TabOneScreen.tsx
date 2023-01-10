import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import UserDataList from '../components/organisms/UserDataList';
import useCustomColors from '../hooks/useCustomColors';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
	const t = useCustomColors();
	return (
		<View style={[styles.container, { backgroundColor: t.bgPrimary }]}>
			<UserDataList />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
