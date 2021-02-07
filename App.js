import React, {Component} from 'react';
import {AppRegistry,ToastAndroid} from 'react-native';
import { WebView } from 'react-native-webview';

export default class app extends Component {
    jsToInject = `
    tvWidget.onChartReady(function() {
        tvWidget.chart().onIntervalChanged().subscribe(
            null,
            function(interval) {
                const response = { type: "onIntervalChanged", interval: interval }
                //window.ReactNativeWebView.postMessage accepts one argument, data,
                //which will be available on the event object, event.nativeEvent.data. data must be a string.
                window.ReactNativeWebView.postMessage(JSON.stringify(response));
            }
        );
    });
    true; // note: this is required, or you'll sometimes get silent failures
          // (https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md)
  `;
  render() {
    return (
          <WebView
          style={{flex: 1,width:'100%',height:'100%'}}
          originWhitelist={["*"]}
          source={{ uri: 'file:///android_asset/index.html' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccessFromFileURLs={true}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
          injectedJavaScript={this.jsToInject}
          // onShouldStartLoadWithRequest={() => false}
          // onMessage={(event) => {
          //     const data = JSON.parse(event.nativeEvent.data)
          //     if (data.type == "onIntervalChanged") {
          //         ToastAndroid.show("Interval = " + data.interval, ToastAndroid.SHORT);
          //     }
          // }}
      />
    );
  }
}

AppRegistry.registerComponent('app', () => app);
