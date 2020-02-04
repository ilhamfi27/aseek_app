import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import styles from './NilaiMapelBox.style'

export default class NilaiMapelBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{this.props.data.mapel}</Text>
          <Text style={styles.headerText}>{this.props.data.indeks}</Text>
        </View>
        <View style={styles.komponenBox}>
          <Text style={styles.komponenText}>Pengetahuan</Text>
          <Text style={styles.komponenText}>{this.props.data.pengetahuan}</Text>
        </View>
        <View style={styles.komponenBox}>
          <Text style={styles.komponenText}>Keterampilan</Text>
          <Text style={styles.komponenText}>{this.props.data.keterampilan}</Text>
        </View>
        <View style={styles.komponenBox}>
          <Text style={styles.komponenText}>Nilai Akhir</Text>
          <Text style={[styles.komponenText, styles.nilaiAkhir]}>{this.props.data.nilaiAkhir}</Text>
        </View>
      </View>
    );
  }
}