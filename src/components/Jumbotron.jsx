import React from 'react';
import styled from 'styled-components';
// Bootstrap
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
// Images
import sunsetImg from '../img/sunset.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${sunsetImg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>React-Bootstrap</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur at autem commodi distinctio est illum
          maiores nulla, quos recusandae sapiente, veritatis, voluptatibus! Cupiditate dicta dolorum eaque ex laudantium
          modi nihil quia quo, sapiente suscipit! Aspernatur culpa enim et harum numquam obcaecati temporibus? Beatae
          consectetur dolor dolore doloremque eius esse ex expedita facilis fugit harum illo iste, itaque laboriosam
          molestiae nam nemo nisi perspiciatis placeat possimus provident quaerat quam quibusdam quidem quisquam quod
          quos repellendus reprehenderit tempora unde veritatis voluptatem?</p>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;