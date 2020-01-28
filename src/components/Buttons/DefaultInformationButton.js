import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../../res/colors'

export default class DefaultInformationButton extends Component {
  constructor(props) {
    super(props);
    const { data, onPress } = props;

    this.state = {
      data: data,
      onPress: onPress,
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.state.onPress()} style={[styles.button]}>
        <View style={{
            flex: 1, 
            alignItems: 'flex-start',
            borderBottomWidth: 1,
            borderBottomColor: colors.black,
            width: '100%',
          }}>
          <Text>{this.state.data.title}</Text>
        </View>
        <View style={{
            flex: 2, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end',
            width: '100%',
          }}>
          <Text>{this.state.data.leftInfo}</Text>
          <Text>{this.state.data.rightInfo}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    borderRadius: 5,
    display: 'flex',
    height: 80,
    justifyContent: 'center',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: '100%',
  },
});