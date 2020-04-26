import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import mainStyle from '../../res/styles'
import UserHeader from '../../components/Header/UserHeader'
import Footer from '../../components/Footer/Footer'
import DefaultInformationButton from '../../components/Buttons/DefaultInformationButton'
export default class Ekstrakulikuler extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ekstrakulikuler: [
        {
          title: 'Pramuka',
          leftInfo: 'Jumat',
          rightInfo: '10.30 - 14.30 WIB',
        },
        {
          title: 'Paskibra',
          leftInfo: 'Kamis & Sabtu',
          rightInfo: '10.30 - 14.30 WIB',
        },
        {
          title: 'PMR',
          leftInfo: 'Kamis & Sabtu',
          rightInfo: '10.30 - 14.30 WIB',
        },
        {
          title: 'Patroli Keamanan Sekolah',
          leftInfo: 'Kamis & Sabtu',
          rightInfo: '10.30 - 14.30 WIB',
        },
        {
          title: 'Stampara',
          leftInfo: 'Kamis & Sabtu',
          rightInfo: '10.30 - 14.30 WIB',
        },
      ]
    }
  }
  render() {
    const buttons = this.state.ekstrakulikuler.map((value, index) => {
      return <DefaultInformationButton key={index} data={value} onPress={() => { null }} />;
    });
    return (
      <View style={mainStyle.container}>
        <UserHeader {...this.props} />
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
