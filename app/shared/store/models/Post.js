import { Model, attr, fk } from 'redux-orm'

// import { hydrateRelations } from '../hydrater'

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
      author: fk('User', 'posts'),
      // comments: many('Comment')
    }
  }

  /* static hydrate(entities) {
    entities.map(entity => {
      const fields = entity.attributes
      const postModel = this.upsert(fields)

      if (entity.relationships) {
        hydrateRelations(postModel, entity.relationships)
      }

      return postModel
    })
  } */

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
