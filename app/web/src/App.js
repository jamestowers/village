import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchPosts } from './store/actions/postsActions'
import { addComment } from './store/actions/commentsActions'
import { postsSelector, usersSelector } from './store/selectors'

// import logo from './logo.svg';
import './App.css';

const initialState = {
  commentText: ''
}
class App extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  state = initialState

  onCommentEnter = (e) => {
    const text = e.target.value
    this.setState({ commentText: text })
  }

  onButtonClick = () => {
    this.props.addComment({
      body: this.state.commentText,
      postId: 4,
      authorId: 3
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>by {post.author.firstName}</p>
            <small>{post.commentCount} comments</small>
            <div>
              <input
                type="text"
                placeholder="Leave a comment"
                name="comment"
                value={this.state.commentText}
                onChange={this.onCommentEnter}
              />
              <button
                type="submit"
                onClick={this.onButtonClick}
              >Add</button>
            </div>
          </div>
        ))}

        <hr />

        {this.props.users.map(user => (
          <div key={user.id}>
            <h2>{user.firstName}</h2>
            <small>{user.postCount} posts</small><br />
            <small>{user.commentCount} comments</small>
          </div>
        ))}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: postsSelector(state),
    users: usersSelector(state),
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts()),
  addComment: (payload) => dispatch(addComment(payload))
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
