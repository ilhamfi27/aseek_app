import axios from '../../axios'
import {
  LOADING,
  CLEAR_LOADING,
  ERROR_NOTIFICATION,
  GET_STUDENT,
} from '../types'
import AsyncStorage from '@react-native-community/async-storage';

export const getAllStudent = () => dispatch => {
  AsyncStorage.getItem('userToken')
    .then((res) => {
      dispatch({ type: LOADING })
      axios.get(`/sekolah/semua_murid`, {
        headers: {
          'Authorization': `Bearer ${res}`
        }
      })
        .then(response => {
          console.log(response.data);
          
          dispatch({ type: CLEAR_LOADING })
          dispatch({
            type: GET_STUDENT,
            payload: response.data
          })
        })
        .catch(error => {
          dispatch({ type: CLEAR_LOADING })
          console.log(error.response);
          dispatch({ type: ERROR_NOTIFICATION, messages: "Gagal Mengambil Data" })
        });
    })
    .catch((err) => {
      console.log(err);
    })
};
