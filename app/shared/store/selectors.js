import { createSelector } from 'redux-orm'

import orm from './orm'

const dbStateSelector = state => state.orm

const selectItemId = (state, itemId) => itemId

export const usersSelector = createSelector(
  orm,
  // The first input selector should always select the db-state.
  // Behind the scenes, `createSelector` begins a Redux-ORM session
  // with the value returned by `dbStateSelector` and passes
  // that Session instance as an argument instead.
  dbStateSelector,
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

export const postsSelector = createSelector(
  orm,
  dbStateSelector,
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

/* export const postSelector = (postId) => createSelector(
  orm,
  dbStateSelector,
  postId,
  session => {
    const post = session.Post.withId(postId)
    const obj = post.ref
    const relations = {}
    if (post.author) {
      relations['author'] = post.author.ref
    }
    if (post.comments) {
      relations['commentCount'] = post.comments.count()
    }

    return Object.assign({}, obj, relations)
  }
) */

export const postSelector = createSelector(
  [postsSelector, selectItemId],
  (posts, postId) => posts[postId]
); 
