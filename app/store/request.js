// TODO: Move this to a middleware??

import axios from "axios"

let request = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, 
  timeout: 2000
})

export default request
