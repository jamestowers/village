import { connect } from 'react-redux'

import Article from './Article'

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps
  const id = navigation.getParam('id')
  return {
    post: state.posts.items[id]
  }
}

const ConnectedArticle = connect(mapStateToProps)(Article)

export default ConnectedArticle
