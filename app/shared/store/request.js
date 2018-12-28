import axios from 'axios'

const config = {
  baseURL: 'http://api.burton.local:9000/api/v1/',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json'
  }
  // transformResponse: axios.defaults.transformResponse.concat(response => 
  //   normalize(response)
  // )
}

const api = axios.create(config)

export const fetchPosts = payload =>
  api.get('/posts?include=author,comments&fields[posts]=title,image,publishedAt,author&fields[users]=firstName,lastName,image')

export const fetchPost = id =>
  api.get(`/posts/${id}?include=author`)

export const persistPost = payload =>
  api.patch(`/posts/${payload.data.id}`, payload)

export default api 
