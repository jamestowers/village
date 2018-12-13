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
  static get modelName() {
    return 'Comment'
  }

  static get fields() {
    return {
      id: attr(),
      body: attr(),
      author: fk('User', 'comments'),
      post: fk('Post', 'comments')
    }
  }

  toString() {
    return `Comment: ${this.body}`
  }

  toJSON() {
    return serializeComment(this.ref)
  }

  /* hydrate(entity) {
    if (entity.relationships) {
      Object.keys(entity.relationships).map(relation => {

      })
    }
  } */
}

export default Comment
