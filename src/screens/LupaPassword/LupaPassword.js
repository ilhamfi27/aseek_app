import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native'
import styles from './LupaPassword.style'
import DefaultButton from '../../components/Buttons/ButtonLogin'
import InvisButton from '../../components/Buttons/invisButton'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  userLogin
} from '../../../redux/actions/UserActions'


class LupaPassword extends Component {
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
            <TextInput
              style={styles.userInput}
              placeholder="Password Lama"
              TextColor="grey"
              
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Password Baru"
              TextColor="grey"
              
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              secureTextEntry={true}
              placeholder="Konfirmasi Password Baru"
              TextColor="grey"
             
            />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Ubah"
              type='default' />
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default connect(null, null)(LupaPassword)
