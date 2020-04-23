import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native'
import{
    Dropdown,
} from 'react-native-material-dropdown';
import styles from './Registrasi.style'
import DefaultButton from './../../components/Buttons/ButtonLogin'
import InvisButton from './../../components/Buttons/invisButton'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  userLogin
} from './../../../redux/actions/UserActions'


class Registrasi extends Component {
  render() {
    let data = [{
        value: 'Guru',
      }, {
        value: 'Orang Tua/Wali',
      }, {
        value: 'Siswa/Siswi',
      }];
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
              placeholder="Username"
              TextColor="grey"
              
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Email"
              TextColor="grey"
              
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              secureTextEntry={true}
              placeholder="Password"
              TextColor="grey"
             
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              secureTextEntry={true}
              placeholder="Konformasi Password"
              TextColor="grey"
              
            />
          </View>
          <View style={styles.Dropdown}>
            <Dropdown
                style={styles.DropdownText}
                label='Peran'
                data={data}
            />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Daftar"
              type='default' />
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default connect(null, null)(Registrasi)
