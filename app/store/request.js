import axios from 'axios'
import normalize from 'json-api-normalizer'

const config = {
  headers: {
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json'
  },
  transformResponse: axios.defaults.transformResponse.concat(response => 
    normalize(response)
  )
}

const request = (url, { method }) => 
  axios[method](url, config)
    .then(response => response)
    .catch(err => console.log(err))
  
export default request
