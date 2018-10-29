import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import eventsReducer from './eventsReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  events: eventsReducer,
})

export default rootReducer
