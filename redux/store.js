import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux';
import userReducer from './reducer/UserReducer'
import uiReducer from './reducer/UIReducer'
import studentReducer from './reducer/StudentReducer'
import thunk from 'redux-thunk';

const reducers =  combineReducers({
  user: userReducer,
  ui: uiReducer,
  student: studentReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
