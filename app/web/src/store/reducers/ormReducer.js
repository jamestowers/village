import orm from '../orm'

import { hydrateIncluded } from '../hydrater'
import { FETCH_POSTS } from '../actionTypes'

const ormReducer = (dbState, action) => {
  const sess = orm.session(dbState)
  const { Post } = sess

  switch (action.type) {
    case `${FETCH_POSTS}_FULFILLED`:
      const { data } = action.payload
      hydrateIncluded(sess, data.included)
      Post.hydrate(data.data)
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
      return sess.state

  }

  // the state property of Session always points to the current database.
  // Updates don't mutate the original state, so this reference is not
  // equal to `dbState` that was an argument to this reducer.
  return sess.state
}

export default ormReducer
