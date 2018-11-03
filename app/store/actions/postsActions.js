import api from "../request"

import { FETCH_POSTS, FETCH_POST } from '../actionTypes'

export const fetchPosts = payload => ({
  type: FETCH_POSTS,
  payload: api.get('/posts')
})

export const fetchPost = id => ({
  type: FETCH_POST,
  payload: api.get(`/posts/${id}`)
})
