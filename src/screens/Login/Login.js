import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from './Login.style'
import DefaultButton from './../../components/Buttons/ButtonLogin'
import InvisButton from './../../components/Buttons/invisButton'
import { ScrollView } from 'react-native-gesture-handler';


export default class Login extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            resizeMode='contain'
            source={require('./../../assets/images/smk_telkom.png')}
            style={styles.logo}
          />
          <View style={styles.input}>
            <TextInput style={styles.userInput} placeholder="Username" placeholderTextColor="grey" />
          </View>
          <View style={styles.input}>
            <TextInput style={styles.userInput} secureTextEntry={true} placeholder="Password" placeholderTextColor="grey" />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Login"
              onPress={() => this.props.navigation.navigate('Home')}
              type='default' />
          </View>
          <View style={styles.invisButton}>
            <InvisButton
              title="Register"
              onPress={() => this.props.navigation.navigate('Home')}
              type='default' />
          </View>
          <View style={styles.invisButton}>
            <InvisButton
              title="Lupa Password"
              onPress={() => this.props.navigation.navigate('Home')}
              type='default' />
          </View>
        </View>
      </ScrollView>
    );
  }
};