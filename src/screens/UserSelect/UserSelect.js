import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button
} from 'react-native';
import styles from './UserSelect.style'
import DefaultButton from './../../components/Buttons/DefaultButton'

export default class UserSelect extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          source={require('./../../assets/images/aseek_dummy_logo.png')}
          style={styles.logo}
        />
        <View style={styles.selectTextBody}>
          <Text style={styles.selectText}>Log In As</Text>
        </View>
        <View style={styles.buttonBox}>
          <DefaultButton
            title="Teacher"
            onPress={() => this.props.navigation.navigate('Login')}
            type='default' />
          <DefaultButton
            title="Parent"
            onPress={() => this.props.navigation.navigate('Login')}
            type='default' />
          <DefaultButton
            title="Student"
            onPress={() => this.props.navigation.navigate('Login')}
            type='default' />
        </View>
      </View>
    );
  }
};