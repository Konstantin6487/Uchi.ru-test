import React from 'react';
import {
  string,
  func,
  arrayOf,
  object,
} from 'prop-types';
import { connect } from 'react-redux';
import {
  format,
  parse,
  startOfWeek,
  addDays,
} from 'date-fns';
import { throttle } from 'lodash';
import styled from 'styled-components';
import { addDay, removeDay, setDay } from '../reducers';
import { getSelectedDay } from '../selectors';

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
  background: ${({ isCurrentDay }) => isCurrentDay && 'red'};
  color: ${({ isCurrentDay }) => isCurrentDay && '#fff'};
  border-radius: ${({ isCurrentDay }) => isCurrentDay && '50%'};
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

const DateCarousel = ({
  day,
  className,
  addDay: setNextDay,
  removeDay: setPrevDay,
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
      <span>{day}</span>
      <Arrow right onClick={handleClickRight}>❯</Arrow>
    </div>
  );
};

DateCarousel.propTypes = {
  className: string.isRequired,
  addDay: func.isRequired,
  removeDay: func.isRequired,
  day: string.isRequired,
};

const ConnectedDateCarousel = connect(({ day }) => {
  const parsed = parse(day, 'M-d-yyyy', new Date());
  const formatted = format(parsed, 'EEEE d MMMM yyyy', { timeZone: 'Europe/Moscow' });
  return ({
    day: formatted,
  });
}, { addDay, removeDay, setDay })(DateCarousel);

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

const CarouselDays = ({
  className,
  setDay: setSelectedDay,
  day,
  weekDays,
}) => {
  const renderWeekDays = () => (
    weekDays.map(({ date, dayName, dayNum }) => (
      <FlexData key={date}>
        <WeekDayLetter>{dayName.toLowerCase()}</WeekDayLetter>
        <WeekDayDigit onClick={() => setSelectedDay(date)} isCurrentDay={date === day}>
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
  setDay: func.isRequired,
  day: string.isRequired,
  weekDays: arrayOf(object).isRequired,
};

const ConnectedCarouselDays = connect(
  (state) => ({ day: getSelectedDay(state) }),
  { setDay },
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

export default Carousel;
