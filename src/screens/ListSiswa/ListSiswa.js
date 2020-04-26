import React, { Component } from 'react';
import {
  View,
} from 'react-native'
import styles from './ListSiswa.style'
import DefaultButton from './../../components/Buttons/ButtonLogin'
import UserHeader from '../../components/Header/UserHeader'
import Footer from '../../components/Footer/Footer'
import InvisButton from './../../components/Buttons/invisButton'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  userLogin
} from './../../../redux/actions/UserActions'
import ListSiswaStyle from './ListSiswa.style';


class ListSiswa extends Component {
  render() {
    return (
    <ScrollView>
        <View style={styles.container}>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Ujang"
              type='default' />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Mamat"
              type='default' />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Andi"
              type='default' />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Sucipto"
              type='default' />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Udin"
              type='default' />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Andre"
              type='default' />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Saipul"
              type='default' />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Rokiah"
              type='default' />
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default connect(null, null)(ListSiswa)
