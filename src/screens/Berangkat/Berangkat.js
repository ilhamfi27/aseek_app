import React, { Component } from 'react'; 
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
          <View>
            <TextInput >
              hai
            </TextInput>
          </View>
        </ScrollView>
        <Footer /> 
      </View>
    );
  }
};
