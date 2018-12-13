import api from "../request"
// import orm from '../orm'
import { serializeComment } from '../models/Comment'

import { PERSIST_COMMENT, FETCH_COMMENTS } from '../actionTypes'

/**
 * @name addComment
 * @description Save a new comment to the database
 * @param {object} payload 
 */
export const addComment = payload => dispatch => {
  const comment = serializeComment(payload)

  return dispatch({
    type: PERSIST_COMMENT,
    payload: api.post(`/comments`, comment)
  })
}

/**
 * @name editComment
 * @description Edit an existing comment and save locally, does not save to database
 * @param {object} payload 
 */
export const editComment = payload => dispatch => {
  const comment = serializeComment(payload)

  return dispatch({
    type: PERSIST_COMMENT,
    payload: api.post(`/posts/${payload.postId}/relationships/comments`, comment)
  })
}

export const fetchComments = postId => dispatch => {
  return dispatch({
    type: FETCH_COMMENTS,
    payload: api.get(`/posts/${postId}/comments?include=author`)
  })
}


