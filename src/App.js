import React, { Component } from 'react';
import { string } from 'prop-types';

import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import Schedule from './Schedule';

const Plus = styled.span`
  color: red;
  font-weight: bold;
  font-size: 25px;
`;

const Header = ({ className }) => {
  return (
    <header className={className}>
      <span>Interview Calendar</span>
      <Plus>＋</Plus>
    </header>
  );
};

Header.propTypes = {
  className: string.isRequired,
};

const WeekDays = styled.div`
  display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    font-size: 20px;
    padding-left: 30px;
    padding-right: 30px;
    text-transform: uppercase;
    margin-bottom: 15px;
`;

const FlexData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeekDaysNames = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const DateCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
`;

const CarouselDays = ({ className }) => {
  return (
    <div className={className}>
      <WeekDays>
        <FlexData>
          <WeekDaysNames>m</WeekDaysNames>
          <span>25</span>
        </FlexData>
        <FlexData>
          <WeekDaysNames>t</WeekDaysNames>
          <span>26</span>
        </FlexData>
        <FlexData>
          <WeekDaysNames>w</WeekDaysNames>
          <span>27</span>
        </FlexData>
        <FlexData>
          <WeekDaysNames>t</WeekDaysNames>
          <span>28</span>
        </FlexData>
        <FlexData>
          <WeekDaysNames>f</WeekDaysNames>
          <span>28</span>
        </FlexData>
        <FlexData>
          <WeekDaysNames>s</WeekDaysNames>
          <span>30</span>
        </FlexData>
        <FlexData>
          <WeekDaysNames>s</WeekDaysNames>
          <span>26</span>
        </FlexData>
      </WeekDays>
      <DateCarousel>
        <span>❮</span>
        <span>Wednesday 27 March 2019</span>
        <span>❯</span>
      </DateCarousel>
    </div>
  );
};

CarouselDays.propTypes = {
  className: string.isRequired,
};

const StyledCarouselDays = styled(CarouselDays)`
  background: #f3f3f3;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

const StyledHeader = styled(Header)`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: lighter;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <StyledHeader />
        <main>
          <StyledCarouselDays />
          <Schedule />
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

const StyledApp = styled(App)`
  margin: 0 auto;
  padding: 0
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
