import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src='/logo.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt=''
          />{' '}
          Topham Online
        </Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>Thanks for stopping by...</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
