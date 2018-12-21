import React from 'react';
import styled from 'styled-components'
import produce from 'immer'

import Layout from '../../../layouts/Default'
import Input from '../../../components/forms/Input'
import Label from '../../../components/forms/Label'
import Button from '../../../components/Button'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.space3};
`

const initialState = {
  postData: {
    id: null
  }
}

class PostEditScreen extends React.PureComponent {

  state = initialState

  componentDidMount() {
    this.props.getPost()
    const nextState = produce(this.state, draftState => {
      draftState.postData.id = this.props.id
    })
    this.setState(nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.props.getPost()
    }
  }

  validate = () => true

  onFieldChange = (event, fieldName) => {
    const nextState = produce(this.state, draftState => {
      draftState.postData[fieldName] = event.target.value
    })

    this.setState(nextState)
  }

  onSave = (e) => {
    e.preventDefault()
    if (!this.validate()) return

    this.props.updatePost(this.state.postData)
    return false
  }

  render() {
    const { post } = this.props

    if (!post) {
      return null
    }

    return (
      <Layout>
        <Wrapper>
          { /** Using key on form tag:
            * @see: https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key 
            */ }
          <form key={post.id}>
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="Enter a post title"
              defaultValue={post.title}
              onChange={(value) => this.onFieldChange(value, 'title')}
            />

            <Label>Body</Label>
            <Input
              as="textarea"
              defaultValue={post.body}
              onChange={(value) => this.onFieldChange(value, 'body')}
            />

            <Button
              primary
              large
              onClick={this.onSave}
            >Save</Button>
          </form>
        </Wrapper>
      </Layout>
    )
  }
}

export default PostEditScreen
