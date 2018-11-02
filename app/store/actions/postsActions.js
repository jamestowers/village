import api from "../request"

export function fetchPosts(payload) {
  return {
    type: 'FETCH_POSTS',
    payload: api.get('/posts')
  }
}

export function fetchPost(id) {
  return {
    type: 'FETCH_POST',
    payload: api.get(`/posts/${id}`)
  }
}
