import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux';
import userReducer from './reducer/UserReducer'
import thunk from 'redux-thunk';

const reducers =  combineReducers({
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;