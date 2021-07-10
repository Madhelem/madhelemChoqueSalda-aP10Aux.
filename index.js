/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DefaultTheme, Provider as ProviderPaper} from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F08FC0',
    accent: '#835151',
    backdrop: '',
  },
};
function Main() {
  return (
    <ProviderPaper theme={theme}>
      <App />
    </ProviderPaper>
  );
}
AppRegistry.registerComponent(appName, () => Main);
