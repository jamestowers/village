import { Model, attr, fk } from 'redux-orm'

class Comment extends Model {
  toString() {
    return `Comment: ${this.body}`
  }

  static get fields() {
    return {
      id: attr(),
      body: attr(),
      // post: oneToOne('Post'),
      author: fk('User', 'comments')
    }
  }

  toJSON() {
    return { ...this.ref };
  }
}

Comment.modelName = 'Comment'

export default Comment
