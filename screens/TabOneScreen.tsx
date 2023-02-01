import { StyleSheet, View } from 'react-native';
import UserDataList from '../components/organisms/UserDataList';
import useCustomColors from '../hooks/useCustomColors';

export default function TabOneScreen() {
  const t = useCustomColors();
  console.log('TabOneScreen rendered');
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
});
