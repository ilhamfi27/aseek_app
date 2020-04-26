import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native'
import styles from './Registrasi.style'
import DefaultButton from './../../components/Buttons/ButtonLogin'
import InvisButton from './../../components/Buttons/invisButton'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  setUserRegistration,
  backToLogin,
} from './../../../redux/actions/UserActions'

class Registrasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      password_confirm: "",
    }
    console.log(props);
  }

  continueRegistration() {
    this.props.onContinue(this.state)
    this.props.navigation.navigate('RegistrasiContinued')
  }

  goToLogin() {
    this.props.onBack()
    this.props.navigation.goBack()
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
              placeholder="Nama"
              TextColor="grey"
              onChangeText={(text) => this.setState({ name: text })}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Username"
              TextColor="grey"
              onChangeText={(text) => this.setState({ username: text })}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Email"
              TextColor="grey"
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              secureTextEntry={true}
              placeholder="Password"
              TextColor="grey"
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              secureTextEntry={true}
              placeholder="Konformasi Password"
              TextColor="grey"
              onChangeText={(text) => this.setState({ password_confirm: text })}
            />
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              onPress={() => this.continueRegistration()}
              title="Selanjutnya"
              type='default' />
          </View>
          <View style={styles.invisButton}>
            <InvisButton
              onPress={() => this.goToLogin()}
              title="Login"
              type='default' />
          </View>
        </View>
      </ScrollView>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  onContinue: (user) => {
    dispatch(setUserRegistration(user))
  },
  onBack: () => {
    dispatch(backToLogin())
  }
})

export default connect(null, mapDispatchToProps)(Registrasi)
