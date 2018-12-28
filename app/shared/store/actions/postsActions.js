export const postActions = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POSTS_PENDING: 'FETCH_POSTS_PENDING',
  FETCH_POSTS_FULFILLED: 'FETCH_POSTS_FULFILLED',
  FETCH_POST: 'FETCH_POST',
  FETCH_POST_PENDING: 'FETCH_POST_PENDING',
  FETCH_POST_FULFILLED: 'FETCH_POST_FULFILLED',
  PERSIST_POST: 'PERSIST_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  REQUEST_UPDATE_POST: 'REQUEST_UPDATE_POST'
}

export const fetchPosts = payload => ({
  type: postActions.FETCH_POSTS,
  payload: payload // api.get('/posts?include=author,comments&fields[posts]=title,image,publishedAt,author&fields[users]=firstName,lastName,image')
})

export const fetchPost = id => ({
  type: postActions.FETCH_POST,
  id: id // api.get(`/posts/${id}?include=author`)
})

export const updatePost = payload => ({
  type: postActions.REQUEST_UPDATE_POST,
  payload: payload
})
