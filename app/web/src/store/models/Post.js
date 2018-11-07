import { Model, attr, fk, many } from 'redux-orm'
import isArray from 'lodash/isArray'

import { addRelation } from '../hydrater'

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
      comments: many('Comment', 'posts')
    }
  }

  static hydrate(entities) {
    entities.map(entity => {
      const fields = entity.attributes
      const newPost = this.upsert(fields)

      if (entity.relationships) {
        Object.keys(entity.relationships).map(key => {
          if (!(key in this.fields)) {
            return console.warn('[Post.js] Relation not found');
          }
          const relation = entity.relationships[key]
          const relationType = this.fields[key].constructor.name

          if (typeof relation.data !== 'undefined') {
            if (isArray(relation.data)) {
              relation.data.map(data => {
                addRelation(newPost, key, relationType, data)
                /* switch (relationType) {
                  case 'ManyToMany':
                    return newPost[key].add(rel.data)
                  default:
                    return newPost[key] = rel.data
                } */
              })
            } else {
              addRelation(newPost, key, relationType, relation.data)
            }
          }
        })
      }
      return newPost
    })
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
