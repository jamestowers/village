import api from "../request"

export function fetchPosts(payload) {
  return {
    type: 'FETCH_POSTS',
    payload: api('http://api.burton.local:8080/posts', {
      method: 'get'
    })
  }
}

export function fetchPost(id) {
  return {
    type: 'FETCH_POST',
    payload: api(`/posts/${id}`, { method: 'get' })
  }
}
