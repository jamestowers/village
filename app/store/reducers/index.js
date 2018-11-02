import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'
import eventsReducer from './eventsReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  events: eventsReducer
})

export default rootReducer
