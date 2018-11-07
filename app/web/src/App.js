import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from './store/actions/postsActions'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getPosts()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts())
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
