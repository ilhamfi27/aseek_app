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
  userRegister
} from './../../../redux/actions/UserActions'

class RegistrasiContiued extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  userRegistration() {
    const user = this.props.user
    this.props.onRegister(user);
  }

  showLoadingInfo() {
    const loading = this.props.ui.registrationLoading
    const success = this.props.ui.registrationSuccess
    const failed = this.props.ui.registrationFailed
    if (loading) {
      showMessage({
        message: "Mendaftarkan...",
        type: "info",
      });
    }

    if (success) {
      showMessage({
        message: "Registratsi berhasil",
        description: "Silakan untuk login",
        type: "success",
      });
    }

    if (failed) {
      showMessage({
        message: this.props.ui.errorMessages[0],
        type: "danger",
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.showLoadingInfo();
  }

  render() {
    let buttons;

    if (this.props.ui.registrationSuccess) {
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
            onPress={() => this.props.navigation.goBack()}
            title="Kembali"
            type='default' />
        </View>
      </View>)
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            resizeMode='contain'
            source={require('./../../assets/images/smk_telkom.png')}
            style={styles.logo}
          />
          <FormSiswa {...this.props} />
          {buttons}
        </View>
      </ScrollView>
    );
  }
};

const FormSiswa = (props) => {
  const user = props.user
  switch (props.user.level) {
    case "siswa":
      return (
        <View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="NIS"
              TextColor="grey"
              onChangeText={(text) => user.nis = text}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Alamat"
              TextColor="grey"
              onChangeText={(text) => user.address = text}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Nomor Yang Dapat Dihubungi"
              TextColor="grey"
              onChangeText={(text) => user.phone_number = text}
            />
          </View>
        </View>
      )

    case "wali":
      return (
        <View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Alamat"
              TextColor="grey"
              onChangeText={(text) => user.address = text}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Nomor Yang Dapat Dihubungi"
              TextColor="grey"
              onChangeText={(text) => user.phone_number = text}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="NIS Putra/Putri"
              TextColor="grey"
              onChangeText={(text) => user.student_id = text}
            />
          </View>
        </View>
      )

    case "sekolah":
      return (
        <View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="NIP"
              TextColor="grey"
              onChangeText={(text) => user.nip = text}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Jabatan"
              TextColor="grey"
              onChangeText={(text) => user.position = text}
            />
          </View>
        </View>
      )


    default:
      break;
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrasiContiued)
