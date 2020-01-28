import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import styles from './Home.style'
import ActionButton from './../../components/Buttons/ActionButton'
import MenuBoxButton from './../../components/Buttons/MenuBoxButton'
class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            resizeMode='cover'
            source={require('./../../assets/images/user_img_dummy.png')} 
            style={styles.userImage}
          />
          <View style={styles.userInformation}>
            <Text style={[styles.userInformationText, styles.usersName]}>Raden Ilham Fadhilah</Text>
            <Text style={styles.userInformationText}>131010687</Text>
            <Text style={styles.userInformationText}>XII Rekayasa Perangkat Lunak A</Text>
            <ActionButton 
              title="Edit" 
              onPress={() => alert('hai')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.homeMenusBody}>
            <MenuBoxButton 
              title="Berangkat" 
              onPress={() => alert('hai')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
            <MenuBoxButton 
              title="Pulang" 
              onPress={() => alert('hai')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
            <MenuBoxButton 
              title="Bank Soal" 
              onPress={() => alert('hai')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
            <MenuBoxButton 
              title="Ekstrakulikuler" 
              onPress={() => alert('hai')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
            <MenuBoxButton 
              title="Rapor" 
              onPress={() => alert('hai')}
              iconImage={require('./../../assets/images/white_pencil.png')} 
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          
        </View>
      </View>
    );
  }
};

export default Home;
