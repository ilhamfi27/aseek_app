// App.js
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import 'react-native-gesture-handler';

import colors from './src/res/colors'

import Home from './src/screens/Home/Home';
import About from './src/screens/About/About';
import Splash from './src/screens/Splash/Splash';
import Login from './src/screens/Login/Login';
import UserSelect from './src/screens/UserSelect/UserSelect';
import BankSoal from './src/screens/BankSoal/BankSoal';
import Berangkat from './src/screens/Berangkat/Berangkat';
import Pulang from './src/screens/Pulang/Pulang';
import Ekstrakulikuler from './src/screens/Ekstrakulikuler/Ekstrakulikuler';
import MapelBankSoal from './src/screens/MapelBankSoal/MapelBankSoal';
import Rapor from './src/screens/Rapor/Rapor';
import Nilai from './src/screens/Nilai/Nilai';
import DetailNilai from './src/screens/DetailNilai/DetailNilai';
import Soal from './src/screens/Soal/Soal';
import Scanner from './src/screens/Scanner/Scanner';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AuthStack = createStackNavigator({
  UserSelect: UserSelect,
  Login: Login,
},{
  headerMode: 'none',
})

const AppNavigator = createStackNavigator({
  Home: Home,
  About: About,
  BankSoal: BankSoal,
  Berangkat: Berangkat,
  Pulang: Pulang,
  Ekstrakulikuler: Ekstrakulikuler,
  MapelBankSoal: MapelBankSoal,
  Rapor: Rapor,
  Nilai: Nilai,
  DetailNilai: DetailNilai,
  Soal: Soal,
  Scanner: Scanner,
}, {
  navigationOptions: {
    header: {
      style: {
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        backgroundColor: colors.homeRed,
      }
    }
  }
});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Splash: Splash,
    App: AppNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Splash',
  })
);
