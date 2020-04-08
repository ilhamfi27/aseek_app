import {
  ADD_FRIEND,
  GET_FRIEND,
} from './../types'

const INITIAL_STATE = {
  current: [],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar',
  ],
}

export default friendReducer = (state = INITIAL_STATE, action) => {
  // Pulls current and possible out of previous state
  // We do not want to alter state directly in case
  // another action is altering it at the same time
  const {
    current,
    possible,
  } = state
  switch (action.type) {
    case ADD_FRIEND:

      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex
      const addedFriend = possible.splice(action.payload, 1)

      // And put friend in friends.current
      current.push(addedFriend)

      // Finally, update our redux state
      const newState = { current, possible }
      return newState
    
    case GET_FRIEND:
      console.log("Masuook");
      return current
    default:
      return state
  }
}
