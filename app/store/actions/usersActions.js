import api from "../request"

import { SELECT_USER } from '../actionTypes'

export const selectUser = id => ({
  type: SELECT_USER,
  payload: id,
})
