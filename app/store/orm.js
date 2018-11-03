// orm.js
import { ORM } from 'redux-orm'

// import models
import Post from './models/Post'
import User from './models/User'

const orm = new ORM()

// register models
orm.register(Post, User)

export default orm