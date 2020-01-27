import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from './Login.style'

export default class Splash extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
            <Image
              style={{ width: "100%", height: 50, borderColor: 'black' }}
              source={{ uri: 'https://smktelkom-bdg.sch.id/wp/wp-content/uploads/2019/07/Primer.png' }}
            />
          </View>
          <View style={styles.useruse}>
          <View style={styles.sectionContainer}>
            <TextInput style={styles.userInput} placeholder="Username" placeholderTextColor="white" />
          </View>

            <View style={styles.sectionContainer}>
              <TextInput style={styles.userInput} secureTextEntry={true} placeholder="Password" placeholderTextColor="white" />
          </View>
          <View style={styles.submit}>
              <TouchableHighlight
                style={styles.submit}
                onPress={console.log("Test Click")}
                underlayColor='#fff'>
                  <Text style={[styles.submitText]}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
      </View>
    );
  }
};