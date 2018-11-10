import { Model, attr, many } from 'redux-orm'

class User extends Model {
  toString() {
    return `User: ${this.firstName} ${this.lastName}`
  }

  static get fields() {
    return {
      id: attr(),
      firstName: attr(),
      lastName: attr(),
      posts: many('Post'),
      comments: many('Comment'),
    }
  }

  static get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  toJSON() {
    return { ...this.ref };
  }
}

User.modelName = 'User'

export default User
