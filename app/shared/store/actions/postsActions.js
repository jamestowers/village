import api from "../request"

import { FETCH_POSTS, FETCH_POST } from '../actionTypes'

export const fetchPosts = payload => ({
  type: FETCH_POSTS,
  payload: api.get('/posts?include=author&fields[posts]=title,image,publishedAt,author&fields[users]=firstName')
})

export const fetchPost = id => ({
  type: FETCH_POST,
  payload: api.get(`/posts/${id}`)
})
