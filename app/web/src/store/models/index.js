import { Schema } from 'redux-orm'

import Post from './Post'
import User from './User'

export const schema = new Schema()

schema.register(Post, User)

export default schema
