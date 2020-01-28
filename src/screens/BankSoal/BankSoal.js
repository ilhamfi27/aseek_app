import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import mainStyle from './../../res/styles'
import UserHeader from './../../components/Header/UserHeader'
import Footer from './../../components/Footer/Footer'
export default class BankSoal extends Component {
  render () {
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
          <View>
            <Text>Bank Soal</Text>
          </View>
        </ScrollView>
        <Footer /> 
      </View>
    );
  }
};