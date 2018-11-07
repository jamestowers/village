import { FETCH_POSTS, FETCH_POST } from '../actionTypes'

const INITIAL_STATE = {
  loading: false,
  items: {}
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_POSTS}_PENDING`:
      return Object.assign({}, state, {
        loading: true
      })
    
    case `${FETCH_POSTS}_FULFILLED`:
      return Object.assign({}, state, {
        items: action.payload.data.posts,
        loading: false
      })
    
    case `${FETCH_POSTS}_REJECTED`:
      return Object.assign({}, state, {
        loading: false
      })
    
    default:
      return state
  }
};

export default postsReducer
