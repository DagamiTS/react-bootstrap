import React from 'react';
// Bootstrap
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// Components
import Slider from '../components/Slider';
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
  </>
);

export default Home;