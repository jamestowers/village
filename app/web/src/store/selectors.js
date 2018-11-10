import { createSelector } from 'redux-orm'

import orm from './orm'

const dbStateSelector = state => state.orm

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

      return Object.assign({}, obj, {
        author: post.author.ref,
        commentCount: post.comments.count()
      })
    })
  }
)