import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import mainStyle from './../../res/styles'
import QRScanner from './../../components/QRCodeScanner/QRScanner'
import Footer from './../../components/Footer/Footer'
import style from './Perjalanan.style'
import { TextInput } from 'react-native-gesture-handler';
export default class Perjalanan extends Component {
  render () {
    return (
      <View style={mainStyle.container}>
        <View style={style.scannerBox}>
          <QRScanner {...this.props}/>
        </View>
        <Footer /> 
      </View>
    );
  }
};
