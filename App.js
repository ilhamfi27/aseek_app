// App.js
import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import 'react-native-gesture-handler';

import HomeScreen from './src/screens/Home/Home';
import AboutScreen from './src/screens/About/About';


export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
},
{
  headerMode: 'none',
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);
