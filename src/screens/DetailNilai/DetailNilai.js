import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import styles from './DetailNilai.style'
import mainStyle from './../../res/styles'
import UserHeader from './../../components/Header/UserHeader'
import Footer from './../../components/Footer/Footer'
import ReviewBoxNilai from '../../components/StudentReviewBox/ReviewBoxNilai';
export default class DetailNilai extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
          <View style={[mainStyle.defaultBody, styles.body]}>
            <ReviewBoxNilai />
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
};
