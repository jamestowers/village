import axios from 'axios'
import normalize from 'json-api-normalizer'

const config = {
  baseURL: 'http://api.burton.local:8080/',
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
