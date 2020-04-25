import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux';
import userReducer from './reducer/UserReducer'
import uiReducer from './reducer/UIReducer'
import thunk from 'redux-thunk';

const reducers =  combineReducers({
  user: userReducer,
  ui: uiReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
