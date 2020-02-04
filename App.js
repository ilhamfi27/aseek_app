// App.js
import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import 'react-native-gesture-handler';

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

const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash
  },
  UserSelect: {
    screen: UserSelect
  },
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  BankSoal: {
    screen: BankSoal
  },
  Berangkat: {
    screen: Berangkat
  },
  Pulang: {
    screen: Pulang
  },
  Ekstrakulikuler: {
    screen: Ekstrakulikuler
  },
  MapelBankSoal: {
    screen: MapelBankSoal
  },
  Rapor: {
    screen: Rapor
  },
  Login: {
    screen: Login
  },
  Nilai: {
    screen: Nilai
  },
  DetailNilai: {
    screen: DetailNilai
  },
  Soal: {
    screen: Soal
  },
  Scanner: {
    screen: Scanner
  },
},
{
  headerMode: 'none',
  initialRouteName: 'Berangkat',
});

const AppContainer = createAppContainer(AppNavigator);
