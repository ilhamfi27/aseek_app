import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native'
import styles from './EditProfile.style'
import DefaultButton from './../../components/Buttons/ButtonLogin'
import InvisButton from './../../components/Buttons/invisButton'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class EditProfile extends Component {
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
              placeholder="Nama"
              TextColor="grey"
            />
          </View>
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
              placeholder="Alamat"
              TextColor="grey"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="No HP"
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

export default connect(null, null)(EditProfile)
