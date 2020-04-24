// App.js
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './redux/store'

import colors from './src/res/colors'

import Home from './src/screens/Home/Home';
import About from './src/screens/About/About';
import Splash from './src/screens/Splash/Splash';
import Login from './src/screens/Login/Login';
import UserSelect from './src/screens/UserSelect/UserSelect';
import BankSoal from './src/screens/BankSoal/BankSoal';
import Perjalanan from './src/screens/Perjalanan/Perjalanan';
import Pulang from './src/screens/Pulang/Pulang';
import Ekstrakulikuler from './src/screens/Ekstrakulikuler/Ekstrakulikuler';
import MapelBankSoal from './src/screens/MapelBankSoal/MapelBankSoal';
import Rapor from './src/screens/Rapor/Rapor';
import Nilai from './src/screens/Nilai/Nilai';
import DetailNilai from './src/screens/DetailNilai/DetailNilai';
import Soal from './src/screens/Soal/Soal';
import Scanner from './src/screens/Scanner/Scanner';
import Tracker from './src/screens/Tracker/Tracker';
import Registrasi from './src/screens/Registrasi/Registrasi';
import EditProfile from './src/screens/EditProfile/Editprofile';
import LupaPassword from './src/screens/LupaPassword/LupaPassword';

export default class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}

const AuthStack = createStackNavigator({
  UserSelect: UserSelect,
  Login: Login,
  Registrasi: Registrasi,
  LupaPassword: LupaPassword,
},{
  headerMode: 'none',
})

const AppNavigator = createStackNavigator({
  Home: Home,
  About: About,
  BankSoal: BankSoal,
  Perjalanan: Perjalanan,
  Pulang: Pulang,
  Ekstrakulikuler: Ekstrakulikuler,
  MapelBankSoal: MapelBankSoal,
  Rapor: Rapor,
  Nilai: Nilai,
  DetailNilai: DetailNilai,
  Soal: Soal,
  Scanner: Scanner,
  Tracker: Tracker,
  EditProfile: EditProfile,
  
  
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.homeRed,
      elevation: 0,
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
