import orm from '../orm'

import handleJsonAPIResponse from '../hydrater'
import { FETCH_POSTS, FETCH_POST, ADD_COMMENT } from '../actionTypes'

const ormReducer = (dbState, action) => {
  const session = orm.session(dbState)
  const { Post, Comment } = session

  switch (action.type) {
    case `${FETCH_POSTS}_FULFILLED`:
    case `${FETCH_POST}_FULFILLED`:
      handleJsonAPIResponse(session, action.payload.data)
      break

    case ADD_COMMENT:
      const comment = Comment.create({
        body: action.payload.body,
        authorId: action.payload.authorId,
      })
      Post.withId(action.payload.postId).comments.add(comment)
      break

    case 'CREATE_POST':
      Post.create(action.payload)
      break

    case 'UPDATE_POST':
      Post.withId(action.payload.id).update(action.payload)
      break

    case 'REMOVE_POST':
      Post.withId(action.payload.id).delete()
      break

    case 'ADD_AUTHOR_TO_POST':
      Post.withId(action.payload.bookId).authors.add(action.payload.author)
      break

    case 'REMOVE_AUTHOR_FROM_POST':
      Post.withId(action.payload.bookId).authors.remove(action.payload.authorId)
      break

    case 'ASSIGN_PUBLISHER':
      Post.withId(action.payload.bookId).publisher = action.payload.publisherId
      break
    default:
      return session.state

  }

  // the state property of Session always points to the current database.
  // Updates don't mutate the original state, so this reference is not
  // equal to `dbState` that was an argument to this reducer.
  return session.state
}

export default ormReducer
