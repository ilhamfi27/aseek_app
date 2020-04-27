import {
  GET_STUDENT, GET_STUDENT_LOCATION,
} from '../types'

const initialState = {
  students: [],
  location: null,
}

export default studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT:
      return {
        ...state,
        students: action.payload,
      }

    case GET_STUDENT_LOCATION:
      return {
        ...state,
        location: action.payload,
      }

    
    default:
      return state
  }
}
