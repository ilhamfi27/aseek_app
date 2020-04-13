import axios from './../../axios'
import {
  USER_LOGIN,
  LOGGED_USER,
  USER_LOGOUT,
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

export const loggedUser = () => {
  return {
    type: LOGGED_USER,
  }
}
