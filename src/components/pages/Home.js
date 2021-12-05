import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
  return (
    <Container className='mainContainer'>
      <Row>
        <Col lg='7'>
          <p>
            There's really not much to see here. But check out our recommended
            websites.
          </p>
        </Col>
        <Col lg='1' className='centerColumn'></Col>
        <Col>
          <p>
            <strong>Recommended Websites:</strong>
          </p>
          <p>
            <a href='http://www.photocoloringbooks.com'>Photo Coloring Books</a>
          </p>
          <p>
            <a href='http://www.snacktimefantasy.com'>Snacktime Fantasy</a>
          </p>
          <p>
            <a href='http://racing.tophamonline.com'>Topham Racing</a>
          </p>
          <p>
            <a href='http://fitkitsystems.com'>Fit Kit Systems</a>
          </p>
          <p>
            <a href='http://fitkitstudio.com'>Fit Kit Studio</a>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
