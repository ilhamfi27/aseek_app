import axios from '../../axios'
import {
  LOADING,
  CLEAR_LOADING,
  ERROR_NOTIFICATION,
  GET_STUDENT,
  GET_STUDENT_LOCATION,
} from '../types'
import AsyncStorage from '@react-native-community/async-storage';

export const getAllStudent = () => dispatch => {
  AsyncStorage.getItem('userToken')
    .then((res) => {
      axios.get(`/sekolah/semua_murid`, {
        headers: {
          Authorization: `Bearer ${res}`
        }
      })
        .then(response => {
          dispatch({
            type: GET_STUDENT,
            payload: response.data
          })
        })
        .catch(err => {
          console.log(err.response);
          dispatch({ type: ERROR_NOTIFICATION, messages: "Gagal Mengambil Data" })
        });
    })
    .catch((err) => {
      console.log(err);
    })
};

export const getStudentTrack = (id = null) => {
  return dispatch => {
    const req = id ? `/siswa/lokasi?id_siswa=${id}` : '/siswa/lokasi'
    AsyncStorage.getItem('userToken')
      .then((res) => {
        return axios.get(req, {
          headers: {
            Authorization: `Bearer ${res}`
          }
        })
          .then(response => {
            dispatch(setStudentTrack(response.data))
          })
          .catch(err => {
            console.log(err.response);
            dispatch({ type: ERROR_NOTIFICATION, messages: "Gagal Mengambil Data" })
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export const setStudentTrack = (track) => {
  return {
    type: GET_STUDENT_LOCATION,
    payload: track
  }
}
