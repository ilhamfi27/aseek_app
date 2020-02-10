import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import styles from './Home.style'
import mainStyle from './../../res/styles'
import UserHeader from './../../components/Header/UserHeader'
import Footer from './../../components/Footer/Footer'
import MenuBoxButton from './../../components/Buttons/MenuBoxButton'
export default class Home extends Component {
  render () {
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
          <View style={mainStyle.defaultBody}>
            <MenuBoxButton 
              title="Berangkat" 
              onPress={() => this.props.navigation.navigate('Scanner')}
              iconImage={require('./../../assets/images/berangkat.png')} 
            />
            <MenuBoxButton 
              title="Pulang" 
              onPress={() => this.props.navigation.navigate('Scanner')}
              iconImage={require('./../../assets/images/pulang.png')} 
            />
            <MenuBoxButton 
              title="Bank Soal" 
              onPress={() => this.props.navigation.navigate('BankSoal')}
              iconImage={require('./../../assets/images/bank_soal.png')} 
            />
            <MenuBoxButton 
              title="Ekstrakulikuler" 
              onPress={() => this.props.navigation.navigate('Ekstrakulikuler')}
              iconImage={require('./../../assets/images/ekstrakulikuler.png')} 
            />
            <MenuBoxButton 
              title="Rapor" 
              onPress={() => this.props.navigation.navigate('Rapor')}
              iconImage={require('./../../assets/images/rapor.png')} 
            />
          </View>
        </ScrollView>
        <Footer /> 
      </View>
    );
  }
};
