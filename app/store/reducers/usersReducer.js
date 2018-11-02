const INITIAL_STATE = {
  loading: false,
  items: {}
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case 'FETCH_POSTS_FULFILLED':
      return Object.assign({}, state, {
        items: action.payload.data.users,
        loading: false
      })
    
    default:
      return state
  }
};

export default userReducer
