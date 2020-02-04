import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../../res/colors'

export default class IconBlockButton extends Component {
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
      <TouchableOpacity onPress={() => this.state.onPress() } style={ styles.button }>
        <View style={ styles.buttonContainer }>
          <View style={ styles.alphaBox }>
            <Text style={ styles.alphaText }>{this.state.data.icon}</Text>  
          </View>
          <View style={ styles.titleBox }>
            <Text style={ styles.titleText }>{this.state.data.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    borderColor: colors.homeRed,
    borderRadius: 5,
    borderWidth: 1,
    display: 'flex',
    height: 70,
    justifyContent: 'center',
    marginVertical: 5,
    width: '100%',
  },
  alphaBox: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: 70,
    height: 70,
    backgroundColor: colors.homeRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  alphaText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleBox: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  }
});