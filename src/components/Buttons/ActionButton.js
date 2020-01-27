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
    console.log(this.state.icon);
    
    const icon = this.state.icon 
      ? (
        <Image
          resizeMode='cover'
          source={this.state.icon}
          style={styles.iconImage}
        />
      ) : null ;

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
    alignItems: 'flex-start',
    borderColor: colors.white,
    borderRadius: 20,
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    marginHorizontal: 20,
    fontSize: 16,
    textTransform: 'capitalize',
    color: colors.white,
  },
  iconImage: {
    height: 20,
    width: 20,
  }
});