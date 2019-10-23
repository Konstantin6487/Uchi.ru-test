import React from 'react';
import { string } from 'prop-types';

import styled from 'styled-components';

const WeekDaysWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-around;
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const WeekDayLetter = styled.div`
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const WeekDayDigit = styled.div`
  cursor: pointer;
  user-select: none;
  padding: 5px;
  &:hover {
    color: #fff;
    background: red;
    border-radius: 50%;
  };
  &:active,
  &:focus {
    transform: translateY(1px);
  };
`;

const FlexData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DateCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
`;

const Arrow = styled.span`
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #9555af;
  };
  &:active,
  &:focus {
    transform: translateY(1px);
  };
  margin-left: ${({ left }) => left && '10px'};
  margin-right: ${({ right }) => right && '10px'};
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 988px;
`;

const CarouselDays = ({ className }) => (
  <div className={className}>
    <Wrapper>
      <WeekDaysWrapper>
        <FlexData>
          <WeekDayLetter>m</WeekDayLetter>
          <WeekDayDigit>25</WeekDayDigit>
        </FlexData>
        <FlexData>
          <WeekDayLetter>t</WeekDayLetter>
          <WeekDayDigit>26</WeekDayDigit>
        </FlexData>
        <FlexData>
          <WeekDayLetter>w</WeekDayLetter>
          <WeekDayDigit>27</WeekDayDigit>
        </FlexData>
        <FlexData>
          <WeekDayLetter>t</WeekDayLetter>
          <WeekDayDigit>28</WeekDayDigit>
        </FlexData>
        <FlexData>
          <WeekDayLetter>f</WeekDayLetter>
          <WeekDayDigit>28</WeekDayDigit>
        </FlexData>
        <FlexData>
          <WeekDayLetter>s</WeekDayLetter>
          <WeekDayDigit>30</WeekDayDigit>
        </FlexData>
        <FlexData>
          <WeekDayLetter>s</WeekDayLetter>
          <WeekDayDigit>26</WeekDayDigit>
        </FlexData>
      </WeekDaysWrapper>
      <DateCarousel>
        <Arrow left>❮</Arrow>
        <span>Wednesday 27 March 2019</span>
        <Arrow right>❯</Arrow>
      </DateCarousel>
    </Wrapper>
  </div>
);

CarouselDays.propTypes = {
  className: string.isRequired,
};

const StyledCarouselDays = styled(CarouselDays)`
  background: #f3f3f3;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0 -2px 5px -5px #333;
`;

export default () => (
  <main>
    <StyledCarouselDays />
  </main>
);
