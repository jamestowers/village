import { connect } from 'react-redux'

import { addComment } from '../../../../../shared/store/actions/commentsActions'

import Form from './Form'

const mapDispatchToProps = dispatch => ({
  addComment: (payload) => dispatch(addComment(payload))
})

export default connect(null, mapDispatchToProps)(Form)
