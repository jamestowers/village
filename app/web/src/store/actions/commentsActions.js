import api from "../request"
import orm from '../orm'
import { serializeComment } from '../models/Comment'

import { PERSIST_COMMENT } from '../actionTypes'

/* function serializeComment(payload) {
  const { id, postId, authorId, ...attributes } = payload
  return {
    data: {
      type: 'comments',
      attributes: {
        ...attributes
      }
    },
    relationships: {
      author: {
        data: {
          type: 'users',
          id: authorId
        }
      },
      post: {
        data: {
          type: 'posts',
          id: postId
        }
      }
    }
  }
} */

/**
 * @name addComment
 * @description Create a comment and save locally, does not save to database
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
 * @name persistComment
 * @description Sav the comment to the database
 * @param {object} payload JSON:API Request data object
 */
export const persistComment = id => (dispatch, getState) => {

  const session = orm.session(getState())
  const { Post } = session
  const comment = Post.withId(id).toJSON()
  console.log(comment, id)

  return dispatch({
    type: PERSIST_COMMENT,
    payload: api.post(`/comments`, comment)
  })
}
