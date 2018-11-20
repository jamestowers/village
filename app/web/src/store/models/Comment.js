import { Model, fk, attr } from 'redux-orm'

// import api from "../request"
// import { PERSIST_COMMENT } from '../actionTypes'

export const serializeComment = (payload) => {
  const { id, postId, authorId, ...attributes } = payload
  const model = {
    data: {
      type: 'comments',
      attributes: {
        ...attributes
      },
      relationships: {
        author: {
          data: {
            type: 'users',
            id: String(authorId)
          }
        },
        post: {
          data: {
            type: 'posts',
            id: String(postId)
          }
        }
      }
    }
  }
  if (id) {
    model.data.id = id
  }

  return model
}

class Comment extends Model {
  toString() {
    return `Comment: ${this.body}`
  }

  static get fields() {
    return {
      id: attr(),
      body: attr(),
      author: fk('User')
    }
  }

  toJSON() {
    return serializeComment(this.ref)
    /* const { id, authorId, ...attributes } = this.ref
    return {
      data: {
        id,
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
            id: this.postId
          }
        }
      }
    } */
  }

  /**
   * @name persistComment
   * @description Sav the comment to the database
   * @param {object} payload JSON:API Request data object
   */
  /* persist() {
    const comment = this.toJSON()
    console.log(comment)

    return dispatch({
      type: PERSIST_COMMENT,
      payload: api.post(`/comments`, comment)
    })
  } */
}

Comment.modelName = 'Comment'

export default Comment
