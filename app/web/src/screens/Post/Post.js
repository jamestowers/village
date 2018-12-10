import React from 'react';
import styled from 'styled-components'

import Hero from '../../components/Hero'
import { H1 } from '../../components/Text/Headings'
import BodyText, { SmallText } from '../../components/Text'
import Comments from '../../components/Comments'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.space3};
`

const initialState = {
  commentText: ''
}

class PostScreen extends React.PureComponent {

  state = initialState

  componentDidMount() {
    this.props.getPost()
  }

  onCommentEnter = (e) => {
    const text = e.target.value
    this.setState({ commentText: text })
  }

  onButtonClick = () => {
    this.props.addComment({
      body: this.state.commentText,
      postId: this.props.post.id,
      authorId: 3
    })
  }

  render() {
    const { post } = this.props

    if (!post) {
      return null
    }

    return (
      <React.Fragment>
        <Hero image={post.image} />
        <Wrapper>
          <H1>{post.title}</H1>
          <SmallText>{post.publishedAt.timeAgo} | by {post.author.firstName}</SmallText>
          <BodyText>{post.body}</BodyText>
          <Comments comments={post.comments} />
          <textarea
            placeholder="Add a comment"
            onChange={this.onCommentEnter}
          ></textarea>
          <button
            onClick={this.onButtonClick}
          >Comment</button>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default PostScreen
