import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import style from './BankSoal.style'
import mainStyle from '../../res/styles'
import UserHeader from '../../components/Header/UserHeader'
import Footer from '../../components/Footer/Footer'
import DetailButton from '../../components/Buttons/DetailButton'
export default class BankSoal extends Component {
  constructor(props){
    super(props)
    this.state = {
      mapel: [
        {
          judul: 'Matematika',
          poin: 60
        },
        {
          judul: 'Bahasa Indonesia',
          poin: 50
        },
        {
          judul: 'Bahasa Inggris',
          poin: 60
        },
        {
          judul: 'Produktif',
          poin: 40
        },
      ]
    }
  }
  render () {
    const buttons = this.state.mapel.map((value, index) => {
      const { judul, poin } = value
      return <DetailButton key={index} title={judul} rightText={poin + " Poin"} onPress={() => {this.props.navigation.navigate('MapelBankSoal')}}/>;
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
