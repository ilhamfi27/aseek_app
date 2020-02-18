import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import mainStyle from '../../res/styles'
import Footer from '../../components/Footer/Footer'
export default class Pulang extends Component {
  render () {
    return (
      <View style={mainStyle.container}>
        <View style={{
          width: '100%',
          height: '90%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <QRScanner />
        </View>
        <Footer /> 
      </View>
    );
  }
};
