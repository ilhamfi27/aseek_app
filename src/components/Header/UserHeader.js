import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
} from 'react-native'
import ActionButton from './../Buttons/ActionButton'
import styles from './UserHeader.style'
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          resizeMode='cover'
          source={require('./../../assets/images/profile.png')}
          style={styles.userImage}
        />
        <View style={styles.userInformation}>
          <Text style={[styles.userInformationText, styles.usersName]}>{ this.props.user.username }</Text>
          <Text style={styles.userInformationText}>131010687</Text>
          <Text style={styles.userInformationText}>XII Rekayasa Perangkat Lunak A</Text>
          <ActionButton
            title="Edit"
            onPress={() => alert('hai')}
            iconImage={require('./../../assets/images/white_pencil.png')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (user) => {
    dispatch(userLogin(user));
  }
});

export default connect(mapStateToProps, null)(UserHeader)
