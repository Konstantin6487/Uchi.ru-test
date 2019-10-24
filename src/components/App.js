import React from 'react';
import { string, arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';
import {
  format,
  parse,
  startOfWeek,
  addDays,
} from 'date-fns';
import styled from 'styled-components';
import GlobalStyle from '../theme/globalStyle';
import Header from './Header';
import Carousel from './Carousel';
import Schedule from './Schedule';
import Footer from './Footer';
import { getSelectedDay } from '../selectors';

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
};

const ConnectedApp = connect((state) => {
  const selectedDay = getSelectedDay(state);
  const parsed = parse(selectedDay, 'M-d-yyyy', new Date());
  const weekStart = startOfWeek(parsed, { weekStartsOn: 1 });

  const weekDays = Array
    .from({ length: 7 }, (_, i) => addDays(weekStart, i))
    .map((_day) => ({
      date: format(_day, 'M-d-yyyy', { timeZone: 'Europe/Moscow' }),
      dayNum: format(_day, 'd', { timeZone: 'Europe/Moscow' }),
      dayName: format(_day, 'EEEEE', { timeZone: 'Europe/Moscow' }),
    }));

  return ({
    weekDays,
  });
})(App);

App.propTypes = {
  className: string.isRequired,
};

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
