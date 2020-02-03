import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import {
  View,
} from 'react-native';
import mainStyle from '../../res/styles'
import styles from './Scanner.style'
export default class Scanner extends Component {
  barcodeRecognized = (barcode) => {
    console.warn(barcode);
  };
  render() {
    return (
      <View style={[mainStyle.container, styles.container]}>
        <View style={styles.cameraBox}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              flex: 1,
              width: '100%',
            }}
            onBarCodeRead={this.barcodeRecognized}
            zoom={0.4}
            ratio="1:1"
          >
          </RNCamera>
        </View>
      </View>
    );
  }
};
