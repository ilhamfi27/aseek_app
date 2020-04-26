import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button
} from 'react-native';
import styles from './UserSelect.style'
import DefaultButton from './../../components/Buttons/DefaultButton'
import { connect } from 'react-redux';
import {
  setUserType
} from './../../../redux/actions/UserActions'

class UserSelect extends Component {
  userLoginCheck(){
    return this.props.user.is_logged_in
  }

  componentDidMount(){
    if (this.userLoginCheck()) {
      this.props.navigation.navigate('Home');
    }
  }

  setTheUserType(type){
    this.props.userChoose(type);
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          source={require('./../../assets/images/aseek_dummy_logo.png')}
          style={styles.logo}
        />
        <View style={styles.selectTextBody}>
          <Text style={styles.selectText}>Log In As</Text>
        </View>
        <View style={styles.buttonBox}>
          <DefaultButton
            title="Teacher"
            onPress={() => this.setTheUserType("sekolah")}
            type='default' />
          <DefaultButton
            title="Parent"
            onPress={() => this.setTheUserType("wali")}
            type='default' />
          <DefaultButton
            title="Student"
            onPress={() => this.setTheUserType("siswa")}
            type='default' />
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => ({
  userChoose: (type) => {
    dispatch(setUserType(type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSelect)
