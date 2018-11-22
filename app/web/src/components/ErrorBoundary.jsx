// @flow
import * as React from 'react'

import ErrorNotice from './ErrorNotice'

type Props = {
  hideContentsOnError: boolean,
  children: React.Node
}

type State = {
  hasError: boolean,
  error: Error | null
}

type ErrorInfo = {
  componentStack: string,
};

class ErrorBoundary extends React.PureComponent<Props, State> {
  static defaultProps = {
    hideContentsOnError: false
  }

  state = {
    hasError: false,
    error: null
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({
      hasError: true,
      error: error
    })
  }

  render() {
    if (this.state.hasError === true) {
      if (this.props.hideContentsOnError) { return null }
      return (
        <ErrorNotice>
          {this.state.error && this.state.error.message ? this.state.error.message : null}
        </ErrorNotice>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary
