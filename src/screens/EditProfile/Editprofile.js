import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native'
import styles from './EditProfile.style'
import DefaultButton from './../../components/Buttons/ButtonLogin'
import UserHeader from './../../components/Header/UserHeader'
import mainStyle from '../../res/styles'
import InvisButton from './../../components/Buttons/invisButton'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  userProfile
} from './../../../redux/actions/UserActions'
import { showMessage, hideMessage } from "react-native-flash-message";

class EditProfile extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.props.onLogin()
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

  userDetail() {
    let registerForm
    switch (this.props.user.level) {
      case "siswa":
        registerForm = (
          <View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="NIS"
                TextColor="grey"
                // onChangeText={(text) => this.setState({ nis: text })}
                value={this.state.nis}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Alamat"
                TextColor="grey"
                // onChangeText={(text) => this.setState({ address: text })}
                value={this.state.address}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Nomor Yang Dapat Dihubungi"
                TextColor="grey"
                // onChangeText={(text) => this.setState({ phone_number: text })}
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
                // onChangeText={(text) => this.setState({ address: text })}
                value={this.state.address}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Nomor Yang Dapat Dihubungi"
                TextColor="grey"
                // onChangeText={(text) => this.setState({ phone_number: text })}
                value={this.state.phone_number}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="NIS Putra/Putri"
                TextColor="grey"
                // onChangeText={(text) => this.setState({ student_id: text })}
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
                // onChangeText={(text) => this.setState({ nip: text })}
                value={this.state.nip}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Jabatan"
                TextColor="grey"
                // onChangeText={(text) => this.setState({ position: text })}
                value={this.state.position}
              />
            </View>
          </View>
        )
        break;
    }
    return registerForm
  }

  updateButtonPressed() {
    showMessage({
      message: "Oops! Fitur sedang dalam pengembangan",
      type: "warning",
    });
  }

  render() {
    return (
      <View style={mainStyle.container}>
        <UserHeader {...this.props} />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Nama"
                TextColor="grey"
                // onChangeText={(text) => this.setState({ name: text })}
                value={this.state.name}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Username"
                TextColor="grey"
                // onChangeText={(text) => this.setState({ username: text })}
                value={this.state.username}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.userInput}
                placeholder="Email"
                TextColor="grey"
                // onChangeText={(text) => this.setState({ email: text })}
                value={this.state.email}
              />
            </View>
            {this.userDetail()}
            <View style={styles.buttonBox}>
              <DefaultButton
                title="Ubah"
                type='default'
                onPress={() => this.updateButtonPressed()} />
            </View>
          </View>
        </ScrollView>
      </View>
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
  onLogin: () => {
    dispatch(userProfile());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
