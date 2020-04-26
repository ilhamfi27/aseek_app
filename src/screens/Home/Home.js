import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import styles from './Home.style'
import mainStyle from './../../res/styles'
import UserHeader from './../../components/Header/UserHeader'
import Footer from './../../components/Footer/Footer'
import MenuBoxButton from './../../components/Buttons/MenuBoxButton'
import { connect } from 'react-redux'
import {
  userLogout,
  userProfile
} from './../../../redux/actions/UserActions'
import { showMessage, hideMessage } from "react-native-flash-message";

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.onLogin()
    console.log(props);
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: '',
    };
  };

  componentDidMount() {
    this.showLoadingInfo()
  }

  buttonLogoutPressed() {
    this.props.onLogout();
    this.props.navigation.navigate("Login")
  }

  showLoadingInfo() {
    showMessage({
      message: "Login berhasil",
      description: `Selamat datang ${this.props.user.name}`,
      type: "success",
      duration: 3000,
    })
  }

  devFeatureButtons() {
    showMessage({
      message: "Oops! Fitur sedang dalam pengembangan",
      type: "warning",
    });
  }

  menuButtons() {
    let buttons
    switch (this.props.user.level) {
      case 'siswa':
        buttons = (
          <View style={mainStyle.defaultBody}>
            <MenuBoxButton
              title="Berangkat"
              onPress={() => this.props.navigation.navigate('Tracker')}
              iconImage={require('./../../assets/images/berangkat.png')}
            />
            <MenuBoxButton
              title="Pulang"
              onPress={() => this.props.navigation.navigate('Perjalanan')}
              iconImage={require('./../../assets/images/pulang.png')}
            />
            <MenuBoxButton
              title="Bank Soal"
              onPress={() => this.props.navigation.navigate('BankSoal')}
              iconImage={require('./../../assets/images/bank_soal.png')}
            />
            <MenuBoxButton
              title="Ekstrakulikuler"
              onPress={() => this.props.navigation.navigate('Ekstrakulikuler')}
              iconImage={require('./../../assets/images/ekstrakulikuler.png')}
            />
            <MenuBoxButton
              title="Rapor"
              onPress={() => this.props.navigation.navigate('Rapor')}
              iconImage={require('./../../assets/images/rapor.png')}
            />
            <MenuBoxButton
              title="LOGOUT"
              onPress={() => this.buttonLogoutPressed()}
            />
          </View>
        )
        break;

      case 'wali':
        buttons = (
          <View style={mainStyle.defaultBody}>
            <MenuBoxButton
              title="LOKASI ANAK"
              onPress={() => this.devFeatureButtons()}
            />
            <MenuBoxButton
              title="Rapor"
              onPress={() => this.props.navigation.navigate('Rapor')}
              iconImage={require('./../../assets/images/rapor.png')}
            />
            <MenuBoxButton
              title="LOGOUT"
              onPress={() => this.buttonLogoutPressed()}
            />
          </View>
        )
        break;

      case 'sekolah':
        buttons = (
          <View style={mainStyle.defaultBody}>
            <MenuBoxButton
              title="LOKASI ANAK"
              onPress={() => this.devFeatureButtons()}
            />
            <MenuBoxButton
              title="LOGOUT"
              onPress={() => this.buttonLogoutPressed()}
            />
          </View>
        )
        break;

      default:
        break;
    }
    return buttons
  }

  render() {
    return (
      <View style={mainStyle.container}>
        <UserHeader {...this.props} />
        <ScrollView>
          <View>
            {this.menuButtons()}
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    dispatch(userLogout());
  },
  onLogin: () => {
    dispatch(userProfile());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
