import { Model, fk, attr } from 'redux-orm'

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
    const { id, authorId, ...attributes } = this.ref
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
    }
  }
}

Comment.modelName = 'Comment'

export default Comment
