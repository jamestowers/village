import { Model, attr, fk } from 'redux-orm'

export const serializePost = (payload) => {
  const { id, authorId, ...attributes } = payload
  const model = {
    data: {
      type: 'posts',
      attributes: {
        ...attributes
      },
      /* relationships: {
        author: {
          data: {
            type: 'users',
            id: String(authorId)
          }
        }
      } */
    }
  }
  if (id) {
    model.data.id = id
  }

  return model
}

const defaultAttributes = {
  title: 'New Post',
  excerpt: '',
  body: '',
  image: '',
  publishedAt: '',
  author: null
};

class Post extends Model {
  static get modelName() {
    return 'Post'
  }

  static get fields() {
    return {
      id: attr(),
      title: attr(),
      excerpt: attr(),
      body: attr(),
      image: attr(),
      publishedAt: attr(),
      author: fk('User', 'posts'),
      // comments: many('Comment')
    }
  }

  static generate(newAttributes = {}) {
    const combinedAttributes = {
      ...defaultAttributes,
      ...newAttributes,
    }

    return this.create(combinedAttributes)
  }

  toString() {
    return `Post: ${this.title}`
  }

  toJSON() {
    return serializePost(this.ref)
  }
}

export default Post
