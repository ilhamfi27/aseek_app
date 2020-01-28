import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import colors from '../../res/colors'

export default class ActionButton extends Component {
  constructor(props) {
    super(props);
    const { title, onPress, iconImage } = props;

    this.state = {
      title: title,
      onPress: onPress,
      icon: iconImage,
    }
  }
  render() {
    const icon = this.state.icon
      ? (
        <Image
          resizeMode='cover'
          source={this.state.icon}
          style={styles.iconImage}
        />
      ) : null;

    return (
      <TouchableOpacity onPress={() => this.state.onPress()} style={[styles.button]}>
        {icon}
        <Text style={[styles.text]}>{this.state.title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    display: 'flex',
    margin: 5,
    backgroundColor: colors.homeRed,
    width: '30.3%',
    height: 120,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.white,
  },
  iconImage: {
    padding: 10,
    width: 5,
    height: 60,
    aspectRatio: 1,
  }
});