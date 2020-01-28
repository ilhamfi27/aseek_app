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
import { ScrollView } from 'react-native-gesture-handler';

export default class Splash extends Component {
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
          <TextInput style={styles.userInput} placeholder="Username" placeholderTextColor = "grey" />
        </View>
        <View style={styles.input}>
          <TextInput style={styles.userInput} secureTextEntry={true} placeholder="Password" placeholderTextColor = "grey" />
        </View>
        <View style={styles.buttonBox}>
        <DefaultButton title="Login" onPress={() => alert("im Clicked!")} type='default'/>
        </View>
      </View>
      </ScrollView>
    );
  }
};