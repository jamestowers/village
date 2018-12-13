import { Model, attr } from 'redux-orm'

class User extends Model {
  static get modelName() {
    return 'User'
  }

  static get fields() {
    return {
      id: attr(),
      firstName: attr(),
      lastName: attr(),
      // posts: many('Post'),
      // comments: many('Comment'),
    }
  }

  static get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  toString() {
    return `User: ${this.firstName} ${this.lastName}`
  }

  toJSON() {
    return { ...this.ref };
  }
}

export default User
