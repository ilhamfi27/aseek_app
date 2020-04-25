import {
  REGISTRATION_LOADING, 
  CLEAR_REGISTRATION_LOADING,
  REGISTRATION_ERROR_NOTIFICATION,
  REGISTRATION_SUCCESS_NOTIFICATION,
} from '../types'

const initialState = {
  registrationLoading: false,
  registrationFailed: false,
  registrationSuccess: false,
  errorMessages: "",
}

export default uiReducer = (state = initialState, action) => {
  // Pulls current and possible out of previous state
  // We do not want to alter state directly in case
  // another action is altering it at the same time
  switch (action.type) {
    case REGISTRATION_LOADING:
      return {
        ...state,
        ...initialState,
        registrationLoading: true,
      }

    case CLEAR_REGISTRATION_LOADING:
      return {
        ...state,
        ...initialState,
      }

    case REGISTRATION_SUCCESS_NOTIFICATION:
      return {
        ...state,
        registrationLoading: false,
        registrationSuccess: true,
        registrationFailed: false,
      }

    case REGISTRATION_ERROR_NOTIFICATION:
      return {
        ...state,
        registrationLoading: false,
        registrationFailed: true,
        errorMessages: action.messages
      }
    
    default:
      return state
  }
}
