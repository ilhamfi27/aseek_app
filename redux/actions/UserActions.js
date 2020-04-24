import axios from './../../axios'
import {
  USER_LOGIN,
  LOGGED_USER,
  USER_LOGOUT,
  SET_USER_TYPE,
  GET_USER_TYPE,
  PREPARE_USER_REGISTRATION,
} from './../types'

export const userLogin = (data) => {
  console.log(data);
  return (dispatch) => {
    return axios.post(`/login`, data)
      .then(response => {
        console.log(response);
        dispatch(userLoginSuccess(response.data))
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const userRegister = (data) => {
  return (dispatch) => {
    return axios.post(`/register`, data)
      .then(response => {
        
      })
      .catch(error => {

      })
  }
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

export const userLoginSuccess = (payload) => {
  return {
    type: USER_LOGIN,
    payload: {
      data: payload
    }
  }
};

export const setUserType = (type) => {
  return {
    type: SET_USER_TYPE,
    payload: {
      type: type
    }
  }
}

export const setUserRegistration = (payload) => {
  return {
    type: PREPARE_USER_REGISTRATION,
    payload: payload
  }
}
