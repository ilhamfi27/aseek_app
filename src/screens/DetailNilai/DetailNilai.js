import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import styles from './DetailNilai.style'
import mainStyle from './../../res/styles'
import UserHeader from './../../components/Header/UserHeader'
import Footer from './../../components/Footer/Footer'
import ReviewBoxNilai from '../../components/StudentReviewBox/ReviewBoxNilai';
import NilaiMapelBox from '../../components/NilaiMapelBox/NilaiMapelBox';
export default class DetailNilai extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataNilai: [
        {
          mapel: 'Matematika',
          indeks: 'A',
          pengetahuan: 90,
          keterampilan: 90,
          nilaiAkhir: 90,
        },
        {
          mapel: 'B. Indonesia',
          indeks: 'A',
          pengetahuan: 89,
          keterampilan: 70,
          nilaiAkhir: 80,
        },
        {
          mapel: 'B. Inggris',
          indeks: 'A',
          pengetahuan: 95,
          keterampilan: 80,
          nilaiAkhir: 93,
        },
        {
          mapel: 'Biologi',
          indeks: 'A',
          pengetahuan: 95,
          keterampilan: 95,
          nilaiAkhir: 95,
        },
      ]
    }
  }
  render() {
    const nilaiSiswa = this.state.dataNilai.map((value, index) => {
      return <NilaiMapelBox data={value} key={index} />;
    })
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
          <View style={[mainStyle.defaultBody, styles.body]}>
            <ReviewBoxNilai />
            <View style={styles.listNilai}>
              {nilaiSiswa}
            </View>
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
};
