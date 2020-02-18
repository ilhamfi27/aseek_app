import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import mainStyle from './../../res/styles'
import Footer from './../../components/Footer/Footer'
import style from './Tracker.style'
import { TextInput } from 'react-native-gesture-handler';
export default class Tracker extends Component {
  render () {
    return (
      <View style={mainStyle.container}>
        <Text>THIS IS TRACKER!</Text>
        <Footer /> 
      </View>
    );
  }
};
