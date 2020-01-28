import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import styles from './ReviewBoxNilai.style'

export default class ReviewBoxNilai extends Component {
  render() {
    return (
      <View style={styles.reviewBox}>
        <View style={styles.reviewTextBox}>
          <Text style={styles.reviewText}>Total Nilai</Text>
          <Text style={styles.reviewText}>2130</Text>
        </View>
        <View style={styles.reviewTextBox}>
          <Text style={styles.reviewText}>Peringkat Kelas</Text>
          <Text style={styles.reviewText}>1</Text>
        </View>
      </View>
    );
  }
}