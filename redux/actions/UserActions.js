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
      dispatch({ type: CLEAR_REGISTRATION_LOADING })
      dispatch({ type: REGISTRATION_ERROR_NOTIFICATION, messages: ["Oops, terjadi kesalahan"] })
      console.log(error.response);
      // const errorMessages = error.response;
      // Object.entries(errorMessages).forEach(entry => {
      //   let key = entry[0];
      //   let value = entry[1];
      //   //use key and value here
      // });
    })
}

export const userLogout = () => {
  return (dispatch) => {
    dispatch(userLogoutAction())
  }
}

export const userLogoutAction = () => {
  return {
    type: USER_LOGOUT
  }
}

export const setUserType = (type) => {
  return {
    type: SET_USER_TYPE,
    payload: {
      level: type
    }
  }
}

export const setUserRegistration = (payload) => {
  return {
    type: PREPARE_USER_REGISTRATION,
    payload: payload
  }
}
