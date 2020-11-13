import React from 'react'
import Container from 'react-bootstrap/Container'

const SocialLinks = () => {
  return (
    <div className='socialLinks'>
      <Container>
        <a href='http://www.facebook.com/anna.topham.1'>
          <i className='fab fa-facebook-f fa-2x socialLink' />
        </a>
        <a href='http://www.facebook.com/reed.topham'>
          <i className='fab fa-facebook-f fa-2x socialLink' />
        </a>
        <a href='http://twitter.com/snack_timefs'>
          <i className='fab fa-twitter fa-2x socialLink' />
        </a>
        <a href='http://twitter.com/HamAnalysis'>
          <i className='fab fa-twitter fa-2x socialLink' />
        </a>
        <a href='http://instagram.com/hamanalysis'>
          <i className='fab fa-instagram fa-2x socialLink' />
        </a>
      </Container>
    </div>
  )
}

export default SocialLinks
