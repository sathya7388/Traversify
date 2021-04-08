import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';

import RootNavigator from './src/navigation/rootNavigation';

const App = () => {
  useEffect (() => {
    AsyncStorage.clear ();
    SplashScreen.hide ();
  }, []);
  return <RootNavigator />;
};

export default App;
