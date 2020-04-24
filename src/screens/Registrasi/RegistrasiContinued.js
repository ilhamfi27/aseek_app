import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native'
import styles from './Registrasi.style'
import DefaultButton from '../../components/Buttons/ButtonLogin'
import InvisButton from './../../components/Buttons/invisButton'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class Registrasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nis: "",
      address: "",
      phone_number: "",
      student_id: "",
      nip: "",
      position: "",
    }
    console.log(props);
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
          <FormSiswa {...this.props}/>
          <View style={styles.buttonBox}>
            <DefaultButton
              onPress={() => this.props.navigation.navigate('RegistrasiContinued')}
              title="Register"
              type='default' />
          </View>
          <View style={styles.invisButton}>
            <InvisButton
              onPress={() => this.props.navigation.goBack()}
              title="Kembali"
              type='default' />
          </View>
        </View>
      </ScrollView>
    );
  }
};

const FormSiswa = (props) => {
  switch (props.user.type) {
    case "siswa":
      return (
        <View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="NIS"
              TextColor="grey"
              onChangeText={(text) => this.setState({ nis: text })}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Alamat"
              TextColor="grey"
              onChangeText={(text) => this.setState({ address: text })}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Nomor Yang Dapat Dihubungi"
              TextColor="grey"
              onChangeText={(text) => this.setState({ phone_number: text })}
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
              onChangeText={(text) => this.setState({ address: text })}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Nomor Yang Dapat Dihubungi"
              TextColor="grey"
              onChangeText={(text) => this.setState({ phone_number: text })}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="NIS Putra/Putri"
              TextColor="grey"
              onChangeText={(text) => this.setState({ student_id: text })}
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
              onChangeText={(text) => this.setState({ nip: text })}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.userInput}
              placeholder="Jabatan"
              TextColor="grey"
              onChangeText={(text) => this.setState({ position: text })}
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
  }
}

export default connect(mapStateToProps, null)(Registrasi)
