import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import i18n from './i18n/i18n';
import AppStack from './navigation/app-stack';
import theme from './theme/theme';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const App = () => (
  <NavigationContainer theme={theme}>
    <AppStack />
  </NavigationContainer>
);
export default App;
