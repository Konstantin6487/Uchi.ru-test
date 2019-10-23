import React from 'react';
import { string } from 'prop-types';

import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import Header from './Header';
import Carousel from './Carousel';
import Schedule from './Schedule';
import Footer from './Footer';



const App = ({ className }) => (
  <div className={className}>
    <Header />
    <Carousel />
    <Schedule />
    <Footer />
  </div>
);

App.propTypes = {
  className: string.isRequired,
};

const StyledApp = styled(App)`
  margin: 0 auto;
  padding: 0;

  @media (max-width: 739.98px) {
    width: 740px;
  }
`;

export default () => (
  <div data-test="app">
    <GlobalStyle />
    <StyledApp />
  </div>
);
