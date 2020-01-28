import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../../res/colors'

export default class DetailButton extends Component {
  constructor(props) {
    super(props);
    const { title, onPress, rightText } = props;

    this.state = {
      title: title,
      onPress: onPress,
      rightText: rightText,
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.state.onPress()} style={[styles.button]}>
        <View style={{
            flex: 2, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%',
          }}>
          <Text style={[styles.text]}>{this.state.title}</Text>
          <Text style={[styles.text]}>{this.state.rightText}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 70,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 5,
    backgroundColor: colors.homeRed,
  },
  text: {
    marginHorizontal: 20,
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.white,
  },
  rightText: {
    textAlign: 'right',
  }
});