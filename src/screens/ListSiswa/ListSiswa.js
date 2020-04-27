import React, { Component } from 'react';
import {
  View,
} from 'react-native'
import styles from './ListSiswa.style'
import mainStyle from './../../res/styles'
import DefaultButton from './../../components/Buttons/ButtonLogin'
import UserHeader from '../../components/Header/UserHeader'
import Footer from '../../components/Footer/Footer'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ListSiswaStyle from './ListSiswa.style';
import { showMessage, hideMessage } from "react-native-flash-message";
import {
  getAllStudent,
  getStudentTrack
} from '../../../redux/actions/DataActions'

class ListSiswa extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onLoad()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) { }
  }

  showLoadingInfo() {
    const loading = this.props.ui.loading
    const failed = this.props.ui.requestFailed

    if (loading) {
      showMessage({
        message: "Mohon tunggu...",
        type: "info",
        autoHide: false
      })
    }

    if (failed) {
      showMessage({
        message: this.props.ui.errorMessages,
        type: "danger",
        duration: 3000
      })
    }
  }

  unavailableButtonPressed() {
    showMessage({
      message: "Oops! Fitur sedang dalam pengembangan",
      type: "warning",
    });
  }

  siswaSelected(id) {
    this.props.trackStudent(id)
    this.props.navigation.navigate('UserTrack')
  }

  listSiswa() {
    return this.props.student.students.map((value, index) => {
      return <View key={index} style={styles.buttonBox}>
        <DefaultButton
          title={value.name}
          onPress={() => this.siswaSelected(value.id)}
          type='default' />
      </View>;
    });
  }

  render() {
    return (
      <View style={mainStyle.container}>
        <UserHeader {...this.props} />
        <ScrollView>
          {this.listSiswa()}
        </ScrollView>
        <Footer />
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    ui: state.ui,
    student: state.student
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(getAllStudent())
  },
  trackStudent: (id) => {
    dispatch(getStudentTrack(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListSiswa)
