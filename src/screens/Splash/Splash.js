import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './Splash.style'

export default class Splash extends Component {
  render () {
    return (
      <Image
          resizeMode='cover'
          source={require('./../../assets/images/Logo_AseeK.png')}
          style={styles.userImage}
        />
    );
  }
};
