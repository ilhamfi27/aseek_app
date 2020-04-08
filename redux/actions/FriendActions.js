import {
  ADD_FRIEND,
  GET_FRIEND,
} from './../types'

export const addFriend = friendIndex => (
  {
    type: ADD_FRIEND,
    payload: friendIndex,
  }
)

export const getFriend = () => (
  {
    type: GET_FRIEND,
  }
)
