import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  min-height: 100vh;
`

const DefaultLayout = ({ children }) => {
  return (
    <Layout className="layout default-layout">
      {children}
    </Layout>
  )
}

export default DefaultLayout;