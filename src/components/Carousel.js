import React from 'react';
import {
  string,
  func,
  arrayOf,
  object,
} from 'prop-types';
import { connect } from 'react-redux';
import { throttle } from 'lodash';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import { changeNextDay, changePrevDay, changeDay } from '../actions';
import { getActiveDay } from '../selectors';
import { parseDateFromUsa, formatDatePretty } from '../helpers';

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
  user-select: none;
  padding: 5px;
  width: 30px;
  text-align: center;
  border-radius: 50%;
  cursor: ${({ isCurrentDay }) => !isCurrentDay && 'pointer'};
  background: ${({ isCurrentDay }) => isCurrentDay && 'red'};
  color: ${({ isCurrentDay }) => isCurrentDay && '#fff'};
  &:active,
  &:focus {
    transform: ${({ isCurrentDay }) => !isCurrentDay && 'translateY(1px)'};
  };
  &:hover {
    background: ${({ isCurrentDay }) => !isCurrentDay && '#9555af'};
    color: #fff;
  };
`;

const FlexData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
`;

const DateCarousel = ({
  activeDay,
  className,
  changeNextDay: setNextDay,
  changePrevDay: setPrevDay,
}) => {
  const handleClickLeft = throttle((e) => {
    e.persist();
    setPrevDay();
  }, 100);

  const handleClickRight = throttle((e) => {
    e.persist();
    setNextDay();
  }, 100);

  return (
    <div className={className}>
      <Arrow left onClick={handleClickLeft}>❮</Arrow>
      <span>{activeDay}</span>
      <Arrow right onClick={handleClickRight}>❯</Arrow>
    </div>
  );
};

DateCarousel.propTypes = {
  className: string.isRequired,
  changeNextDay: func,
  changePrevDay: func.isRequired,
  activeDay: string.isRequired,
};

const ConnectedDateCarousel = connect((state) => {
  const activeDay = getActiveDay(state);
  const parsed = parseDateFromUsa(activeDay);
  const formatted = formatDatePretty(parsed);

  return ({
    activeDay: formatted,
  });
}, { changeNextDay, changePrevDay, changeDay })(DateCarousel);

const StyledDateCarousel = styled(ConnectedDateCarousel)`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
  padding-left: 16%;
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

const CarouselDays = ({
  className,
  changeDay: setSelectedDay,
  activeDay,
  weekDays,
}) => {
  const renderWeekDays = () => (
    weekDays.map(({ date, dayName, dayNum }) => (
      <FlexData key={date}>
        <WeekDayLetter>{dayName.toLowerCase()}</WeekDayLetter>
        <WeekDayDigit onClick={() => setSelectedDay(date)} isCurrentDay={date === activeDay}>
          {dayNum}
        </WeekDayDigit>
      </FlexData>
    ))
  );

  return (
    <div className={className}>
      <Wrapper>
        <WeekDaysWrapper>
          <FlexData />
          {renderWeekDays()}
        </WeekDaysWrapper>
        <StyledDateCarousel>
          <Arrow left>❮</Arrow>
          <span>Wednesday 27 March 2019</span>
          <Arrow right>❯</Arrow>
        </StyledDateCarousel>
      </Wrapper>
    </div>
  );
};

CarouselDays.propTypes = {
  className: string.isRequired,
  changeDay: func.isRequired,
  activeDay: string.isRequired,
  weekDays: arrayOf(object).isRequired,
};

const ConnectedCarouselDays = connect(
  (state) => ({ activeDay: getActiveDay(state) }),
  { changeDay },
)(CarouselDays);

const StyledCarouselDays = styled(ConnectedCarouselDays)`
  background: #f3f3f3;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0 -2px 5px -5px #333;
`;

const Carousel = ({ weekDays }) => (
  <main>
    <StyledCarouselDays weekDays={weekDays} />
  </main>
);

Carousel.propTypes = {
  weekDays: arrayOf(object).isRequired,
};

export default Carousel;
