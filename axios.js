// axios
import axios from 'axios'
import { AsyncStorage } from '@react-native-community/async-storage';

const baseURL = 'https://aseek.herokuapp.com/api/v1';
// const baseURL = 'http://192.168.1.8:8000/api/v1';

export default axios.create({
  baseURL: baseURL,
  // You can add your headers here
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD',
  },
})
