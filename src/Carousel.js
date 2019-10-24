import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { format, parse } from 'date-fns';

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
  width: 15%;
`;

const DateCarousel = ({ day, className }) => (
  <div className={className}>
    <Arrow left>❮</Arrow>
    <span>{day}</span>
    <Arrow right>❯</Arrow>
  </div>
);

// const DateCarousel = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 20px;
//   align-items: center;
//   padding-left: 17%;
//   padding-right: 4%;
// `;

const ConnectedDateCarousel = connect(({ day }) => {
  const parsed = parse(day, 'M-d-yyyy', new Date());
  const formatted = format(parsed, 'EEEE d MMMM yyyy');
  return ({
    day: formatted,
  });
})(DateCarousel);

const StyledDateCarousel = styled(ConnectedDateCarousel)`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
  padding-left: 17%;
  padding-right: 4%;
`;

const Arrow = styled.span`
  cursor: pointer;
  user-select: none;
  color: red;
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

const CarouselDays = (props) => (
  <div className={props.className}>
    <Wrapper>
      <WeekDaysWrapper>
        <FlexData />
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
      <StyledDateCarousel>
        <Arrow left>❮</Arrow>
        <span>Wednesday 27 March 2019</span>
        <Arrow right>❯</Arrow>
      </StyledDateCarousel>
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

const Carousel = () => (
  <main>
    <StyledCarouselDays />
  </main>
);

export default Carousel;
