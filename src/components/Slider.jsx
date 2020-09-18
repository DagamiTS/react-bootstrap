import React from 'react';
// Bootstrap
import { Carousel } from 'react-bootstrap';
// Image
import sunsetImg from '../img/sunset.jpg';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ 'height': '500px' }}>
        <img src={sunsetImg} alt="First slide" className="d-block w-100" />
        <Carousel.Caption>
          <h3>React-Bootstrap</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ 'height': '500px' }}>
        <img src={sunsetImg} alt="Second slide" className="d-block w-100" />
        <Carousel.Caption>
          <h3>React-Bootstrap</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ 'height': '500px' }}>
        <img src={sunsetImg} alt="Third slide" className="d-block w-100" />
        <Carousel.Caption>
          <h3>React-Bootstrap</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;