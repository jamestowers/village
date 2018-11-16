import axios from 'axios'

const config = {
  baseURL: 'http://api.burton.local:8080/api/v1/',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json'
  }
  // transformResponse: axios.defaults.transformResponse.concat(response => 
  //   normalize(response)
  // )
}

const instance = axios.create(config)

export default instance
