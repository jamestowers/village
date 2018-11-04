import { createSelector } from 'reselect'

const getPosts = state => Object.values(state.posts.items) || []
const getUsers = state => state.users.items

export const postsWithAuthor = createSelector(
  [getPosts, getUsers],
  (posts, users) => {
    return posts.map(post => {
      const author = users[post.relationships.author.data.id]
      console.log(post.relationships.author.data.id)
      return Object.assign({}, post, { author })
    })
  }
)
