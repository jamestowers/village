import { connect } from 'react-redux'

import Article from './Article'

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps
  const id = navigation.getParam('id')
  return {
    event: state.events.items[id]
  }
}

const ConnectedArticle = connect(mapStateToProps)(Article)

export default ConnectedArticle
