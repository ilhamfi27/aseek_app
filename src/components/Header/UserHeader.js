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
  constructor(props) {
    super(props)
  }

  showEditButton() {
    if (this.props.navigation.state.routeName == "Home") {
      return <ActionButton
        title="Edit"
        onPress={() => this.props.navigation.navigate('EditProfile')}
        iconImage={require('./../../assets/images/white_pencil.png')}
      />
    }
    return null
  }

  showUserIdNumber() {
    switch (this.props.user.level) {
      case 'siswa':
        return <View>
          <Text style={styles.userInformationText}>{this.props.user.nis}</Text>
          <Text style={styles.userInformationText}>SISWA</Text>
        </View>
        break;

      case 'sekolah':
        return <View>
          <Text style={styles.userInformationText}>{this.props.user.nip}</Text>
          <Text style={styles.userInformationText}>GURU / SEKOLAH</Text>
        </View>
        break;

      case 'wali':
        return <Text style={styles.userInformationText}>WALI MURID</Text>
        break;
      default:
        null
        break;
    }
  }

  render() {
    return (
      <View style={styles.header}>
        <Image
          resizeMode='cover'
          source={require('./../../assets/images/profile.png')}
          style={styles.userImage}
        />
        <View style={styles.userInformation}>
          <Text style={[styles.userInformationText, styles.usersName]}>
            {this.props.user.name}
          </Text>
          {this.showUserIdNumber()}
          {this.showEditButton()}
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

export default connect(mapStateToProps, null)(UserHeader)
