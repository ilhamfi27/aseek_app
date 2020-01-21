import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <View>
          <Button title="Back Home" onPress={() => {this.props.navigation.goBack()}}/>
        </View>
      </View>
    )
  }
}
