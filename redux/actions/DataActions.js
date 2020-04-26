import axios from '../../axios'
import {
  USER_LOGIN,
  LOADING,
  CLEAR_LOADING,
  ERROR_NOTIFICATION,
} from '../types'
import AsyncStorage from '@react-native-community/async-storage';

export const getAllStudent = () => dispatch => {
  AsyncStorage.getItem('userToken')
    .then((res) => {
      dispatch({ type: LOADING })
      axios.get(`/sekolah/semua_murid`)
        .then(response => {
          dispatch({ type: CLEAR_LOADING })
          dispatch({
            type: USER_LOGIN,
            payload: response.data
          })
        })
        .catch(error => {
          dispatch({ type: CLEAR_LOADING })
          console.log(error.response);
          dispatch({ type: ERROR_NOTIFICATION, messages: "Login Gagal" })
        });
    })
    .catch((err) => {
      console.log(err);
    })
};
