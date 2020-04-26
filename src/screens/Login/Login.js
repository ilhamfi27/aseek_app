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
import Registrasi from '../Registrasi/Registrasi';
import LupaPassword from '../LupaPassword/LupaPassword';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCredentials: "",
      password: "",
    }
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

  userLoginCheck(){
    return this.props.user.is_logged_in
  }

  componentDidMount(){
    if (this.userLoginCheck()) {
      this.props.navigation.navigate('Home');
    }
  }

  componentDidUpdate(prevProps){
    if (this.userLoginCheck()) {
      this.props.navigation.navigate('Home');
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
              title="Register"
              onPress={() => this.props.navigation.navigate('Home')}
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
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (user) => {
    dispatch(userLogin(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
