import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Picker,
  Text,
} from 'react-native';
import styles from './Soal.style'
import mainStyle from '../../res/styles'
import UserHeader from '../../components/Header/UserHeader'
import Footer from '../../components/Footer/Footer'
import IconBlockButton from '../../components/Buttons/IconBlockButton'
import ReviewBoxNilai from '../../components/StudentReviewBox/ReviewBoxNilai';
export default class Soal extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttons: [
        {
          icon: 'A', 
          title: 'Pemberi Harapan Palsu'
        },
        {
          icon: 'B', 
          title: 'Pengganggu Hubungan Pasutri'
        },
        {
          icon: 'C', 
          title: 'Pacaran Hobi Poto'
        },
        {
          icon: 'D', 
          title: 'Personal Home Page'
        },
        {
          icon: 'E', 
          title: 'PHP Home Page'
        },
      ],
    }
  }
  render() {
    const buttonNilai = this.state.buttons.map((value, index) => {
      return (<IconBlockButton key={index} data={value} onPress={ () => { null }}/>)
    })
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
          <View style={[mainStyle.defaultBody, styles.body]}>
            <View style={[styles.boxSoal]}>
               <View style={[styles.statusSoal]}>
                 <Text style={[styles.soalTerjawabText]}>Soal Terjawab</Text>
                 <Text style={[styles.poinTerjawabText]}>20 Poin</Text>
               </View>
               <View style={[styles.boxTextSoal]}>
                 <Text style={[styles.textSoal]}>PHP adalah singkatan dari...</Text>
               </View>
            </View>
            <View style={styles.buttonBox}>
              {buttonNilai}
            </View>
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
};
