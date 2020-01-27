// App.js
import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import 'react-native-gesture-handler';

import Home from './src/screens/Home/Home';
import About from './src/screens/About/About';
import Splash from './src/screens/Splash/Splash';
import UserSelect from './src/screens/UserSelect/UserSelect';

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
},
{
  headerMode: 'none',
  initialRouteName: 'UserSelect',
});

const AppContainer = createAppContainer(AppNavigator);
