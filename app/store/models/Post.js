import { Model, attr, many, oneToOne } from 'redux-orm'

class Post extends Model {
  toString() {
    return `Post: ${this.title}`
  }
}

Post.modelName = 'Post'
Post.fields = {
  id: attr(),
  title: attr(),
  excerpt: attr(),
  body: attr(),
  image: attr(),
  publishedAt: attr(),
  author: oneToOne('User', 'posts')
}

export default Post
