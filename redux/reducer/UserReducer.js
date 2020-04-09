import {
  USER_LOGIN,
  LOGGED_USER,
} from './../types'

const INITIAL_STATE = {
  user: {
    user_id: "",
    username: "",
    email: "",
    level: "",
  }
}

export default userReducer = (state = INITIAL_STATE, action) => {
  // Pulls current and possible out of previous state
  // We do not want to alter state directly in case
  // another action is altering it at the same time
  const {
    user,
  } = state
  switch (action.type) {
    case USER_LOGIN:
      const userPayload = action.payload.data

      user.user_id = userPayload.user_id
      user.username = userPayload.username
      user.email = userPayload.email
      user.level = userPayload.level

      return user
    
    case LOGGED_USER:
      return user

    default:
      return state
  }
}
