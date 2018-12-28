import { combineReducers } from 'redux'

import orm from '../orm'
import handleJsonAPIResponse from '../hydrater'
// Actions
import { postActions as POST_ACTIONS } from '../actions/postsActions'

// Reducer functions
import postsReducer from '../reducers/postsReducer'

/* NOTE: Becuase Redux-ORM requires the entire entities slice of the store to be
 * passed to it, we cannot break this reducer up into seperate reducer files. As
 * a work around we created reducer functions in each module that take three params:
 *
 * state: the combined entities state slice
 * action: the action
 * session: the Redux-ORM session
 *
 * This top level reducer creates the session and hands off the actual work of updating
 * the session state to the reducer functions.
 *
 * The last line of this reducer `return session.state` returns a new state based on the
 * changes made in the reducer functions to the session.state.
 **/
function ormReducer(state = orm.getEmptyState(), action) {
  let session
  // pass the state, action and session to the actual reducers
  switch (true) {

    /**
     * Handle ALL responses from sucessful API calls
     * For noe we assume any action ending in SUCCEEDED is a succesful
     * reposne from the server and we hydrat the rom state with thr returned data
     * JSON:API allows us to use a blanket function to hydrate all models
     */
    case action.type.endsWith('_SUCCEEDED'):
      session = orm.session(state)
      handleJsonAPIResponse(session, action.payload)
      break

    // POSTS
    case Object.values(POST_ACTIONS).includes(action.type):
      session = orm.session(state)
      postsReducer(state, action, session)
      break

    default:
      return state
  }

  // Finally, return state either the default or the updated session.state
  return session ? session.state : state
}

// export the conbined reducer
export default combineReducers({
  // metadata: metadataReducer,
  orm: ormReducer,
})