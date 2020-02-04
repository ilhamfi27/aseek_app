import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import mainStyle from '../../res/styles'
import UserHeader from '../../components/Header/UserHeader'
import Footer from '../../components/Footer/Footer'
import DefaultInformationButton from '../../components/Buttons/DefaultInformationButton'
export default class MapelBankSoal extends Component {
  constructor(props){
    super(props)
    this.state = {
      ekstrakulikuler: [
        {
          title: 'Soal 1',
          leftInfo: 'Soal Terjawab',
          rightInfo: '20 Poin',
        },
        {
          title: 'Soal 2',
          leftInfo: 'Soal Belum Terjawab',
          rightInfo: '0 Poin',
        },
        {
          title: 'Soal 3',
          leftInfo: 'Soal Terjawab',
          rightInfo: '20 Poin',
        },
        {
          title: 'Soal 4',
          leftInfo: 'Soal Terjawab',
          rightInfo: '20 Poin',
        },
        {
          title: 'Soal 5',
          leftInfo: 'Soal Terjawab',
          rightInfo: '20 Poin',
        },
      ]
    }
  }
  render () {
    const buttons = this.state.ekstrakulikuler.map((value, index) => {
      return <DefaultInformationButton key={index} data={value} onPress={() => { 
        this.props.navigation.navigate('Soal')
       }}/>;
    });
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
          <View style={mainStyle.redBody}>
            {buttons}
          </View>
        </ScrollView>
        <Footer /> 
      </View>
    );
  }
};
