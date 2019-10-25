import React from 'react';
import { arrayOf, object, string } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from './Header';
import Carousel from './Carousel';
import Schedule from './Schedule';
import Footer from './Footer';
import { getActiveDay } from '../selectors';
import {
  parseDateFromUsa,
  getStartOfWeek,
  getWeekDaysData,
} from '../helpers';
import GlobalStyle from '../theme/globalStyle';

const App = ({ className, weekDays }) => (
  <div className={className}>
    <Header />
    <Carousel weekDays={weekDays} />
    <Schedule weekDays={weekDays} />
    <Footer />
  </div>
);

App.propTypes = {
  weekDays: arrayOf(object).isRequired,
  className: string.isRequired,
};

const ConnectedApp = connect((state) => {
  const activeDay = getActiveDay(state);
  const parsed = parseDateFromUsa(activeDay);
  const weekStart = getStartOfWeek(parsed);
  const weekDays = getWeekDaysData(weekStart);

  return ({
    weekDays,
  });
})(App);

const StyledApp = styled(ConnectedApp)`
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
