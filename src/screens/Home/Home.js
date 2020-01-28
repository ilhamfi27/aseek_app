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
              onPress={() => this.props.navigation.navigate('Berangkat')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
            <MenuBoxButton 
              title="Pulang" 
              onPress={() => this.props.navigation.navigate('Pulang')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
            <MenuBoxButton 
              title="Bank Soal" 
              onPress={() => this.props.navigation.navigate('BankSoal')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
            <MenuBoxButton 
              title="Ekstrakulikuler" 
              onPress={() => this.props.navigation.navigate('Ekstrakulikuler')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
            <MenuBoxButton 
              title="Rapor" 
              onPress={() => this.props.navigation.navigate('Rapor')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
          </View>
        </ScrollView>
        <Footer /> 
      </View>
    );
  }
};
