import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import InfoModalContent from '../components/tabTwoScreen/InfoModalContent';
import { RootStackScreenProps } from '../types';

export default function InfoModalScreen({
  navigation,
  route,
}: RootStackScreenProps<'InfoModal'>) {
  const appTitle = route.params?.appTitle || '';
  const appDescription = route.params?.appDescription || '';
  const bottomInfo = route.params?.bottomInfo || '';

  return (
    <BlurView intensity={20} style={styles.container}>
      <InfoModalContent
        appTitle={appTitle}
        appDescription={appDescription}
        bottomInfo={bottomInfo}
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
  },
});
