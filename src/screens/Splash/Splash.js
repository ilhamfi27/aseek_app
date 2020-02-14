import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './Splash.style'

export default class Splash extends Component {
  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.props.navigation.navigate('UserSelect')
    }, 2000);
  }
  render() {
    return (
      <Image
        resizeMode='cover'
        source={require('./../../assets/images/Logo_AseeK.png')}
        style={styles.userImage}
      />
    );
  }
};
