import axios from './../../axios'
import {
  USER_LOGIN,
  USER_LOGOUT,
  SET_USER_TYPE,
  PREPARE_USER_REGISTRATION,
  LOADING,
  CLEAR_LOADING,
  SUCCESS_NOTIFICATION,
  ERROR_NOTIFICATION,
  SET_USER_PROFILE,

} from './../types'
import AsyncStorage from '@react-native-community/async-storage';

export const userLogin = (data) => dispatch => {
  dispatch({ type: LOADING })
  axios.post(`/login`, data)
    .then(response => {
      dispatch({ type: CLEAR_LOADING })
      dispatch({ type: SUCCESS_NOTIFICATION })
      dispatch({
        type: USER_LOGIN,
        payload: response.data
      })
      AsyncStorage.setItem('userToken', response.data.token);
    })
    .catch(error => {
      dispatch({ type: CLEAR_LOADING })
      console.log(error.response);
      dispatch({ type: ERROR_NOTIFICATION, messages: "Login Gagal" })
    });
};

export const userRegister = (data) => dispatch => {
  console.log(data);
  dispatch({ type: LOADING })
  axios.post(`/register`, data)
    .then(response => {
      dispatch({ type: CLEAR_LOADING })
      dispatch({ type: SUCCESS_NOTIFICATION })
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: CLEAR_LOADING })
      let errors = []
      const errorMessages = error.response.data.error;
      Object.entries(errorMessages).forEach(entry => {
        let value = entry[1];
        errors.push(value)
      });
      let completeErrors = errors.join(", ")
      dispatch({ type: ERROR_NOTIFICATION, messages: completeErrors })
    })
}

export const userLogout = () => dispatch => {
  dispatch({ type: USER_LOGOUT })
}

export const userProfile = () => dispatch => {
  AsyncStorage.getItem('userToken')
    .then((res) => {
      axios.get(`/user/profil`, {
        headers: {
          'Authorization': `Bearer ${res}`
        }
      })
        .then(response => {
          dispatch({ type: SET_USER_PROFILE, payload: response.data.profile })
        })
        .catch(error => {
          console.log(error.response);
        })
    })
    .catch((err) => {
      console.log(err);
    })
}

export const setUserType = (type) => dispatch => {
  dispatch({
    type: SET_USER_TYPE,
    payload: {
      level: type
    }
  })
  dispatch({ type: CLEAR_LOADING })
}

export const setUserRegistration = (payload) => dispatch => {
  dispatch({
    type: PREPARE_USER_REGISTRATION,
    payload: payload
  })
}

export const backToLogin = () => dispatch => {
  dispatch({ type: CLEAR_LOADING })
}
