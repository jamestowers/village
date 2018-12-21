// import { FETCH_POSTS, FETCH_POST } from '../actionTypes'


const INITIAL_STATE = {
  loading: false,
  items: {}
}

const postsReducer = (state = INITIAL_STATE, action, session) => {
  switch (action.type) {

    case 'UPDATE_POST':
      const { Post } = session
      Post.withId(action.payload.id).update(action.payload)
      break

    default:
      return state
  }
};

export default postsReducer
