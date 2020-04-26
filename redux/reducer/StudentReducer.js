import {
  GET_STUDENT,
} from '../types'

const initialState = {
  students: [],
}

export default studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT:
      return {
        ...state,
        students: action.payload,
      }
    
    default:
      return state
  }
}
