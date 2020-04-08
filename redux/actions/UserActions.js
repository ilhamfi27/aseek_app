import axios from 'axios'
import {
  ADD_FRIEND,
  GET_FRIEND,
  USER_LOGIN,
} from './../types'

const apiUrl = 'http://192.168.1.8:8000/api/v1';

export const addFriend = friendIndex => (
  {
    type: ADD_FRIEND,
    payload: friendIndex,
  }
)

export const getFriend = () => (
  {
    type: GET_FRIEND,
  }
)

export const userLogin = (data) => {
  console.log(data);
  return (dispatch) => {
    return axios.post(`${apiUrl}/login`, data)
      .then(response => {
        console.log(response);
        dispatch(userLoginSuccess(response.data))
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const userLoginSuccess = (payload) => {
  return {
    type: USER_LOGIN,
    payload: {
      data: payload
    }
  }
};
