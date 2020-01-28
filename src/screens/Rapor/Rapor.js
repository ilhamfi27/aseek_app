import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import mainStyle from '../../res/styles'
import UserHeader from '../../components/Header/UserHeader'
import Footer from '../../components/Footer/Footer'
export default class Rapor extends Component {
  render () {
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
          <View>
            <Text>Rapor</Text>
          </View>
        </ScrollView>
        <Footer /> 
      </View>
    );
  }
};
