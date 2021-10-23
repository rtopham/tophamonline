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
            Long before there was WordPress or Facebook or Twitter, we put up a
            website and called it Tophamonline. We hand coded the html and we
            got excited about things like dynamic fonts and CSS. We even had a
            24/7 webcam to check out our old dog, Auggie.
          </p>
          <p>
            The website later morphed into a WordPress blog, and we tried to
            keep everyone up to date by posting as often as we could. Then
            Zuckerberg ruined all that. Like you, we now communicate with
            friends and update our status on Facebook. It is quick and
            convenient, but also a bit embarrassing for a family that puts
            together web-apps with React and Nodejs.
          </p>
          <p>
            You can find links to our websites here. But if you just want to
            keep up with the latest snippets from the Tophams, you will need to
            find us on Facebook. But don’t be surprised if we find a way to
            bring the Auggie cam back one of these days! But of course we would
            now have to call it the Otto cam.
          </p>
        </Col>
        <Col lg='1' className='centerColumn'></Col>
        <Col>
          <p>
            <strong>Our Other Websites:</strong>
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
        </Col>
      </Row>
    </Container>
  )
}

export default Home
