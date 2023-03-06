import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
