import React, {Component} from 'react';
import {AppRegistry,} from 'react-native';
import { WebView } from 'react-native-webview';

export default class app extends Component {
  render() {
    return (
          <WebView
          style={{flex: 1}}
          originWhitelist={["*"]}
          source={{uri:'https://coinbase-assignment.herokuapp.com/'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccessFromFileURLs={true}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
      />
    );
  }
}

AppRegistry.registerComponent('app', () => app);
