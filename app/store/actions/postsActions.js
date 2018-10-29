import request from "../request"

export function fetchPosts(payload) {
  return {
    type: 'FETCH_POSTS',
    payload: request.get('http://api.burton.local:8080/posts')
  }
}

export function fetchPost(id) {
  return {
    type: 'FETCH_POST',
    payload: request.get(`/posts/${id}`)
  }
}
