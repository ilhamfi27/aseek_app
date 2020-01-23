import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './Splash.style'

export default class Splash extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>ASEEK APP</Text>
      </View>
    );
  }
};
