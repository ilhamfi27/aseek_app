import axios from './../../axios'
import {
  USER_LOGIN,
  USER_LOGOUT,
  SET_USER_TYPE,
  PREPARE_USER_REGISTRATION,
  REGISTRATION_LOADING,
  CLEAR_REGISTRATION_LOADING,
  REGISTRATION_SUCCESS_NOTIFICATION,
  REGISTRATION_ERROR_NOTIFICATION,

} from './../types'

export const userLogin = (data) => dispatch => {
  return axios.post(`/login`, data)
    .then(response => {
      dispatch({
        type: USER_LOGIN,
        payload: { ...response.data }
      })
    })
    .catch(error => {
      console.log(error);
    });
};

export const userRegister = (data) => dispatch => {
  console.log(data);
  dispatch({ type: REGISTRATION_LOADING })
  return axios.post(`/register`, data)
  .then(response => {
    dispatch({ type: CLEAR_REGISTRATION_LOADING })
    dispatch({ type: REGISTRATION_SUCCESS_NOTIFICATION })
    console.log(response);
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: CLEAR_REGISTRATION_LOADING })
      let errors = []
      const errorMessages = error.response.data.error;
      Object.entries(errorMessages).forEach(entry => {
        let value = entry[1];
        errors.push(value)
      });
      let completeErrors = errors.join(", ")
      dispatch({ type: REGISTRATION_ERROR_NOTIFICATION, messages: completeErrors })
    })
}

export const userLogout = () => dispatch => {
  dispatch({ type: USER_LOGOUT })
}

export const setUserType = (type) => dispatch => {
  dispatch({
    type: SET_USER_TYPE,
    payload: {
      level: type
    }
  })
  dispatch({type: CLEAR_REGISTRATION_LOADING})
}

export const setUserRegistration = (payload) => dispatch => {
  dispatch({
    type: PREPARE_USER_REGISTRATION,
    payload: payload
  })
}

export const backToLogin = () => dispatch => {
  dispatch({type: CLEAR_REGISTRATION_LOADING})
}
