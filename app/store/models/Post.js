import { Model, attr, many, oneToOne } from 'redux-orm'

const defaultAttributes = {
  title: 'New Post',
  excerpt: '',
  body: '',
  image: '',
  publishedAt: '',
  author: null
};

class Post extends Model {
  toString() {
    return `Post: ${this.title}`
  }

  static get fields() {
    return {
      id: attr(),
      title: attr(),
      excerpt: attr(),
      body: attr(),
      image: attr(),
      publishedAt: attr(),
      author: oneToOne('User', 'posts')
    }
  }

  static parse(postData) {

    return this.upsert(postData);
  }

  static generate(newAttributes = {}) {
    const combinedAttributes = {
      ...defaultAttributes,
      ...newAttributes,
    };

    return this.create(combinedAttributes);
  }

  toJSON() {
    return { ...this.ref };
  }
}

Post.modelName = 'Post'

export default Post
