import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors'

export default class ButtonLogin extends Component {
  constructor(props){
    super(props);
    const { title, onPress, type } = props;
    
    this.state = {
      title: title,
      onPress: onPress,
      type: type,
    }
  }
  buttonType = () => {
    if (this.state.type == 'default') {
      return buttonDefault;
    }
  }
  render () {
    const condStyle = this.buttonType();
    return (
      <TouchableOpacity onPress={() => this.state.onPress()} style={[styles.button, condStyle.button]}>
        <Text style={[styles.text, condStyle.text]}>{ this.state.title }</Text>
      </TouchableOpacity>
    );
  }
};

const buttonDefault = StyleSheet.create({
  button: {
    borderColor: colors.defaultRed,
    backgroundColor: colors.defaultRed,
  },
  text: {
    color: colors.white,
  },
});

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    width: 300,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1,
    marginVertical: 5,
    alignItems:"center",
  },
  text: {
    marginHorizontal: 20,
    fontSize: 16,
    textTransform: 'capitalize',
  },
});