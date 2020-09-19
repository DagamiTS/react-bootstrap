import React from 'react';
// Bootstrap
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// Components
import Slider from '../components/Slider';
import Jumbotron from '../components/Jumbotron';
// Image
import sunsetImg from '../img/sunset.jpg';

const Home = () => (
  <>
    <Slider />
    <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={sunsetImg} />
            <Card.Body>
              <Card.Title>React-Bootstrap</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={sunsetImg} />
            <Card.Body>
              <Card.Title>React-Bootstrap</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={sunsetImg} />
            <Card.Body>
              <Card.Title>React-Bootstrap</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Jumbotron />
    <Container style={{ marginBottom: '30px' }}>
      <Row>
        <Col md={6}>
          <img src={sunsetImg} alt="image of sunset" height={300} />
        </Col>
        <Col md={6}>
          <h2>React-Bootstrap</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur at autem commodi distinctio est
            illum
            maiores nulla, quos recusandae sapiente, veritatis, voluptatibus! Cupiditate dicta dolorum eaque ex
            laudantium
            modi nihil quia quo, sapiente suscipit! Aspernatur culpa enim et harum numquam obcaecati temporibus? Beatae
            consectetur dolor dolore doloremque eius esse ex expedita facilis fugit harum illo iste, itaque laboriosam
            molestiae nam nemo nisi perspiciatis placeat possimus provident quaerat quam quibusdam quidem quisquam quod
            quos repellendus reprehenderit tempora unde veritatis voluptatem?</p>
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;