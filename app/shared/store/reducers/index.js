import { combineReducers } from 'redux'
import ormReducer from './ormReducer'
// import postsReducer from './postsReducer'
// import usersReducer from './usersReducer'
// import eventsReducer from './eventsReducer'

const rootReducer = combineReducers({
  orm: ormReducer,
  // posts: postsReducer,
  // users: usersReducer,
  // events: eventsReducer
})

export default rootReducer
