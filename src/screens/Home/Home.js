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
  userLogout
} from './../../../redux/actions/UserActions'

class Home extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.otherParam : '',
    };
  };

  buttonLogoutPressed(){
    this.props.onLogout();
    this.props.navigation.navigate("Login")
  }

  render () {
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
