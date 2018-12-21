import { createSelector } from 'reselect'
import { createSelector as createOrmSelector } from 'redux-orm'

import orm from './orm'

export const ormStateSelector = state => state.orm

const selectItemId = (state, itemId) => itemId

export const usersSelector = createOrmSelector(
  orm,
  // The first input selector should always select the db-state.
  // Behind the scenes, `createOrmSelector` begins a Redux-ORM session
  // with the value returned by `ormStateSelector` and passes
  // that Session instance as an argument instead.
  ormStateSelector,
  session => {
    return session.User.all().toModelArray().map(user => {

      // Returns a reference to the raw object in the store,
      // so it doesn't include any reverse or m2m fields.
      const obj = user.ref

      return Object.assign({}, obj, {
        postCount: user.posts.count(),
        commentCount: user.comments.count()
      })
    })
  }
)

export const postsSelector = createOrmSelector(
  orm,
  ormStateSelector,
  session => {
    return session.Post.all().toModelArray().map(post => {
      const obj = post.ref
      const relations = {}
      if (post.author) {
        relations['author'] = post.author.ref
      }
      if (post.comments) {
        relations['commentCount'] = post.comments.count()
      }
      return Object.assign({}, obj, relations)
    })
  }
)

/* export const postSelector = createOrmSelector(
  orm,
  ormStateSelector,
  (session, id) => {
    const post = session.Post.withId(id).ref
    const relations = {}
    if (post.author) {
      relations['author'] = post.author.ref
    }
    if (post.comments) {
      relations['commentCount'] = post.comments.count()
    }
    return Object.assign({}, post, relations)
  }
) */

// TODO: Use selector factory as per bottom of: 
// https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/
// Current selector is not memoized properly
export const postSelector = createSelector(
  [postsSelector, selectItemId],
  (posts, postId) => {
    return posts.find(post => post.id === postId)
  }
)

export const commentsSelector = createOrmSelector(
  orm,
  ormStateSelector,
  session => {
    return session.Comment.all().toModelArray()
  }
)