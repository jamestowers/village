import api from "../request"

import { postActions } from '../actionTypes'

export const fetchPosts = payload => ({
  type: postActions.FETCH_POSTS,
  payload: api.get('/posts?include=author,comments&fields[posts]=title,image,publishedAt,author&fields[users]=firstName,lastName,image')
})

export const fetchPost = id => ({
  type: postActions.FETCH_POST,
  payload: api.get(`/posts/${id}?include=author`)
})

export const updatePost = payload => ({
  type: postActions.REQUEST_UPDATE_POST,
  payload: payload
})
