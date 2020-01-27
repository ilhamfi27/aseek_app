// App.js
import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import 'react-native-gesture-handler';

import Home from './src/screens/Home/Home';
import About from './src/screens/About/About';
import Splash from './src/screens/Splash/Splash';
import Login from './src/screens/Login/Login';


export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash
  },
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Login: {
    screen: Login
  },
},
{
  headerMode: 'none',
  initialRouteName: 'Login',
});

const AppContainer = createAppContainer(AppNavigator);
