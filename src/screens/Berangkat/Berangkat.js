import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import mainStyle from '../../res/styles'
import UserHeader from '../../components/Header/UserHeader'
import Footer from '../../components/Footer/Footer'
import { TextInput } from 'react-native-gesture-handler';
export default class Berangkat extends Component {
  render () {
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              flex: 1,
              width: '100%',
            }}
            onBarCodeRead={this.barcodeRecognized}
          >
          </RNCamera>
        </ScrollView>
        <Footer /> 
      </View>
    );
  }
};
