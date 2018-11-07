import { createSelector } from 'redux-orm'

import orm from './orm'

const dbStateSelector = state => state.orm

export const userSelector = createSelector(
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
      // Object.keys(obj) === ['id', 'name']

      return Object.assign({}, obj, {
        posts: user.posts.toRefArray().map(post => post.title),
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
        author: post.user.toRefArray().map(post => post.firstName),
      })
    })
  }
)