import React, { Component } from 'react'
import { RNCamera } from 'react-native-camera';
import {
  View,
} from 'react-native'
import styles from './QRScanner.style'

export default class QRScanner extends Component {
  barcodeRecognized = (barcode) => {
    this.props.navigation.goBack(null)
    this.props.navigation.navigate('Tracker')
  };
  render() {
    return (
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
          zoom={0.3}
          ratio="1:1"
        >
        </RNCamera>
      </View>
    );
  }
}