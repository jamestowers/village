import api from "../request"

import { ADD_COMMENT, PERSIST_COMMENT } from '../actionTypes'

export const addComment = payload => dispatch => {
  console.log(payload)
  return dispatch({ type: ADD_COMMENT, payload })
  /* return dispatch({
    type: PERSIST_COMMENT,
    payload: api.post(`/posts/${payload.postId}/comments`, payload)
  }) */
}
