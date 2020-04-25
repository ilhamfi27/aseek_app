import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native'
import styles from './Registrasi.style'
import DefaultButton from '../../components/Buttons/ButtonLogin'
import InvisButton from './../../components/Buttons/invisButton'
import { showMessage, hideMessage } from "react-native-flash-message";
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  userRegister,
  setUserRegistration,
} from './../../../redux/actions/UserActions'

class RegistrasiContiued extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      name: this.props.user.name,
      username: this.props.user.username,
      email: this.props.user.email,
      password: this.props.user.password,
      password_confirm: this.props.user.password_confirm,
      nis: this.props.user.nis,
      address: this.props.user.address,
      phone_number: this.props.user.phone_number,
      student_id: this.props.user.student_id,
      nip: this.props.user.nip,
      position: this.props.user.position,
      level: this.props.user.level,
    }
  }

  userRegistration() {
    this.props.onRegister(this.state)
  }

  showLoadingInfo() {
    const loading = this.props.ui.loading
    const success = this.props.ui.requestSuccess
    const failed = this.props.ui.requestFailed
    if (loading) {
      showMessage({
        message: "Mendaftarkan...",
        type: "info",
        autoHide: false
      })
    }

    if (success) {
      showMessage({
        message: "Registratsi berhasil",
        description: "Silakan untuk login",
        type: "success",
      })
    }

    if (failed) {
      showMessage({
        message: this.props.ui.errorMessages,
        type: "danger",
        autoHide: false
      })
    }
  }

  goBackButton(){
    this.props.onBack(this.state)
    this.props.navigation.goBack()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.showLoadingInfo()
    }
  }

  render() {
    let buttons;
    let registerForm;

    if (this.props.ui.requestSuccess) {
      buttons = (<View>
        <View style={styles.invisButton}>
          <InvisButton
            onPress={() => this.props.navigation.navigate('Login')}
            title="Login"
            type='default' />
        </View>
      </View>)
    } else {
      buttons = (<View>
        <View style={styles.buttonBox}>
          <DefaultButton
            onPress={() => this.userRegistration()}
            title="Register"
            type='default' />
        </View>
        <View style={styles.invisButton}>
          <InvisButton
            onPress={() => this.goBackButton()}
            title="Kembali"
            type='default' />
        </View>
      </View>)
    }

    switch (this.props.user.level) {
      case "siswa":
        registerForm = (
          <View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="NIS"
                TextColor="grey"
                onChangeText={(text) => this.setState({ nis: text })}
                value={this.state.nis}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Alamat"
                TextColor="grey"
                onChangeText={(text) => this.setState({ address: text })}
                value={this.state.address}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Nomor Yang Dapat Dihubungi"
                TextColor="grey"
                onChangeText={(text) => this.setState({ phone_number: text })}
                value={this.state.phone_number}
              />
            </View>
          </View>
        )
        break;

      case "wali":
        registerForm = (
          <View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Alamat"
                TextColor="grey"
                onChangeText={(text) => this.setState({ address: text })}
                value={this.state.address}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Nomor Yang Dapat Dihubungi"
                TextColor="grey"
                onChangeText={(text) => this.setState({ phone_number: text })}
                value={this.state.phone_number}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="NIS Putra/Putri"
                TextColor="grey"
                onChangeText={(text) => this.setState({ student_id: text })}
                value={this.state.student_id}
              />
            </View>
          </View>
        )
        break;

      case "sekolah":
        registerForm = (
          <View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="NIP"
                TextColor="grey"
                onChangeText={(text) => this.setState({ nip: text })}
                value={this.state.nip}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Jabatan"
                TextColor="grey"
                onChangeText={(text) => this.setState({ position: text })}
                value={this.state.position}
              />
            </View>
          </View>
        )
        break;
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            resizeMode='contain'
            source={require('./../../assets/images/smk_telkom.png')}
            style={styles.logo}
          />
          {registerForm}
          {buttons}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user,
    ui: state.ui,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRegister: (user) => {
    dispatch(userRegister(user))
  },
  onBack: (user) => {
    dispatch(setUserRegistration(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrasiContiued)
