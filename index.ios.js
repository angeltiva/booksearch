/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import App from './app/app'

class graduate extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('graduate', () => graduate);
