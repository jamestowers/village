const INITIAL_STATE = {
  loading: false,
  items: {}
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_PENDING':
      return Object.assign({}, state, {
        loading: true
      })
    
    case 'FETCH_POSTS_FULFILLED':
      return Object.assign({}, state, {
        items: action.payload.data.posts,
        loading: false
      })
    
    case 'FETCH_POSTS_REJECTED':
      return Object.assign({}, state, {
        loading: false
      })
    
    default:
      return state
  }
};

export default postsReducer
