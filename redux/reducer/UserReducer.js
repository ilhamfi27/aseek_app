import {
  USER_LOGIN,
  USER_LOGOUT,
  SET_USER_TYPE,
  PREPARE_USER_REGISTRATION,
} from './../types'

const initialState = {
  is_logged_in: false,
}

export default userReducer = (state = initialState, action) => {
  // Pulls current and possible out of previous state
  // We do not want to alter state directly in case
  // another action is altering it at the same time
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        is_logged_in: true,
        ...action.payload,
      }
    
    case USER_LOGOUT:
      return initialState

    case SET_USER_TYPE:
      return {
        ...state,
        ...action.payload
      }
    
    case PREPARE_USER_REGISTRATION:
      return {
        ...state,
        ...action.payload
      }
    
    default:
      return state
  }
}
