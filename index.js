// index.js
import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('app');
    AppRegistry.runApplication(appName, { rootTag });
}
