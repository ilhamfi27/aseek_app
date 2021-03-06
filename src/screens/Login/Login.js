import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native';
import styles from './Login.style'
import DefaultButton from './../../components/Buttons/ButtonLogin'
import InvisButton from './../../components/Buttons/invisButton'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  userLogin
} from './../../../redux/actions/UserActions'
import { showMessage, hideMessage } from "react-native-flash-message";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCredentials: "",
      password: "",
    }
    console.log(props);
  }

  submitHandler() {
    const { userCredentials, password } = this.state
    const userData = {
      user_credentials: userCredentials,
      password: password,
    }
    this.props.onLogin(userData)
  }

  handleUserCredentials(data) {
    this.setState({
      userCredentials: data
    })
  }

  handlePassword(data) {
    this.setState({
      password: data
    })
  }

  userLoginCheck() {
    return this.props.user.is_logged_in && this.props.user.profile_completed
  }

  componentDidMount() {
    if (this.userLoginCheck()) {
      this.props.navigation.navigate('Home');
    }
  }
  
  forgetPasswordButtonPressed() {
    showMessage({
      message: "Oops! Fitur sedang dalam pengembangan",
      type: "warning",
    });
  }

  showLoadingInfo() {
    const loading = this.props.ui.loading
    const success = this.props.ui.requestSuccess
    const failed = this.props.ui.requestFailed
    if (loading) {
      showMessage({
        message: "Mencoba Login...",
        type: "info",
        autoHide: false
      })
    }

    if (failed) {
      showMessage({
        message: this.props.ui.errorMessages,
        type: "danger",
        duration: 3000
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.showLoadingInfo()
      if (this.userLoginCheck()) {
        this.props.navigation.navigate('Home');
      }
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            resizeMode='contain'
            source={require('./../../assets/images/smk_telkom.png')}
            style={styles.logo}
          />
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Username"
              TextColor="grey"
              onChangeText={(text) => this.setState({ userCredentials: text })}
              value={this.state.userCredentials}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              secureTextEntry={true}
              placeholder="Password"
              TextColor="grey"
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
            />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              title="Login"
              onPress={() => { this.submitHandler() }}
              type='default' />
          </View>
          <View style={styles.invisButton}>
            <InvisButton
              title="Registrasi"
              onPress={() => this.props.navigation.navigate('Registrasi')}
              type='default' />
          </View>
          <View style={styles.invisButton}>
            <InvisButton
              title="Lupa Password"
              onPress={() => this.props.navigation.navigate('ListSiswa')}
              type='default' />
          </View>
        </View>
      </ScrollView>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user,
    ui: state.ui,
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (user) => {
    dispatch(userLogin(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
