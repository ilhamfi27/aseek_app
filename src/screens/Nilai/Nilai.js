import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Picker,
  Text,
} from 'react-native';
import styles from './Nilai.style'
import mainStyle from './../../res/styles'
import UserHeader from './../../components/Header/UserHeader'
import Footer from './../../components/Footer/Footer'
import IconBlockButton from './../../components/Buttons/IconBlockButton'
import ReviewBoxNilai from '../../components/StudentReviewBox/ReviewBoxNilai';
export default class Nilai extends Component {
  constructor(props){
    super(props);
    this.state = {
      semester: [
        {
          label: 'Semester 1',
          value: '1'
        },
        {
          label: 'Semester 2',
          value: '2'
        },
        {
          label: 'Semester 3',
          value: '3'
        },
        {
          label: 'Semester 4',
          value: '4'
        },
        {
          label: 'Semester 5',
          value: '5'
        },
      ],
      buttons: [
        {
          icon: 'A', 
          title: 'Muatan Lokal'
        },
        {
          icon: 'B', 
          title: 'Muatan Kewilayahan'
        },
        {
          icon: 'C', 
          title: 'Muatan Peminatan Kejuruan'
        },
      ],
    }
  }
  render() {
    const pickerSemester = this.state.semester.map((value, index) => {
      return (<Picker.Item key={index} label={value.label} value={value.value} />)
    })
    const buttonNilai = this.state.buttons.map((value, index) => {
      return (<IconBlockButton key={index} data={value} onPress={ () => { null }}/>)
    })
    return (
      <View style={mainStyle.container}>
        <UserHeader />
        <ScrollView>
          <View style={[mainStyle.defaultBody, styles.body]}>
            <Picker
              style={styles.picker}
            >
              {pickerSemester}
            </Picker>
            <ReviewBoxNilai />
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
