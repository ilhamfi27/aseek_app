import {
  LOADING, 
  CLEAR_LOADING,
  ERROR_NOTIFICATION,
  SUCCESS_NOTIFICATION,
} from '../types'

const initialState = {
  loading: false,
  requestFailed: false,
  requestSuccess: false,
  errorMessages: "",
}

export default uiReducer = (state = initialState, action) => {
  // Pulls current and possible out of previous state
  // We do not want to alter state directly in case
  // another action is altering it at the same time
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        ...initialState,
        loading: true,
      }

    case CLEAR_LOADING:
      return {
        ...state,
        ...initialState,
      }

    case SUCCESS_NOTIFICATION:
      return {
        ...state,
        loading: false,
        requestSuccess: true,
        requestFailed: false,
      }

    case ERROR_NOTIFICATION:
      return {
        ...state,
        loading: false,
        requestFailed: true,
        errorMessages: action.messages
      }
    
    default:
      return state
  }
}
