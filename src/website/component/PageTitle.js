import React from 'react'
import { Container } from 'react-bootstrap'

const PageTitle = ({ pageTitle }) => {
  return (
    <div className='connect-bg fixed-bg'>
    <Container className='text-center text-white'>
      <h1>{pageTitle}</h1>
    </Container>
  </div>
  )
}

export default PageTitle
