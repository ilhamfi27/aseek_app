import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import style from './Rapor.style'
import mainStyle from '../../res/styles'
import UserHeader from '../../components/Header/UserHeader'
import Footer from '../../components/Footer/Footer'
import DetailButton from '../../components/Buttons/DetailButton'
export default class Rapor extends Component {
  constructor(props){
    super(props)
    this.state = {
      nilai: [
        {
          judul: 'Nilai Akademik',
        },
        {
          judul: 'Catatan Akademik',
        },
        {
          judul: 'PKL',
        },
        {
          judul: 'Ekstrakulikuler',
        },
        {
          judul: 'Kehadiran',
        },
      ]
    }
  }
  render () {
    const buttons = this.state.nilai.map((value, index) => {
      const { judul } = value
      return <DetailButton key={index} title={judul} rightText=">" onPress={() => {alert (judul)}}/>;
    });
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
          <View style={mainStyle.defaultBody}>
            {buttons}
          </View>
        </ScrollView>
        <Footer /> 
      </View>
    );
  }
};
