import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  string,
  arrayOf,
  object,
  func,
} from 'prop-types';
import { get } from 'lodash';
import { addEvent, selectEventCell } from '../actions';
import { listByDateSelector, selectEventCellSelector } from '../selectors';

const Cell = styled.div`
  width: 15%;
  height: 60px;
  margin-right: -1px;
  margin-bottom: -1px;
  border: 0.5px solid gainsboro;
  padding: 2px;
  display: flex;
  box-sizing: border-box;
`;

const CellInner = styled.div`
  background: ${({ hasEvent }) => hasEvent && 'lightgray'};
  background: ${({ isSelected, hasEvent }) => isSelected && hasEvent && 'blue'};
  flex-basis: 100%;
  &:hover {
    background: gray;
  };
`;

const CellEmpty = styled(Cell)`
  border: none;
  align-items: flex-end;
  justify-content: right;
`;

const Row = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  max-width: 988px;
  margin: 0 auto;
`;

const Schedule = ({
  className,
  weekDays,
  addEvent,
  selectEventCell,
  selectedCellEventData,
  listByDate,
}) => {
  const dayHoursList = Array.from({ length: 24 }, (_, i) => (i < 10 ? `0${i}:00` : `${i}:00`));

  const hasEventOnDate = (date, hour) => !!get(listByDate, [`${date}`, `${hour}`]);
  const isSelectedCell = ({ date: cellDate, hour: cellHour }) => {
    const { date: eventDate, hour: eventHour } = selectedCellEventData;
    return eventDate === cellDate && eventHour === cellHour;
  };
  const addEventToDate = (data) => () => addEvent(data);
  const selectCellWithEvent = (eventData) => () => selectEventCell(eventData);

  const renderWeekScheduleRow = (hour) => (
    weekDays.map(({ date }) => {
      const hasEvent = hasEventOnDate(date, hour);
      return (
        <Cell key={`${date}-${hour}`}>
          <CellInner
            date={date}
            hour={hour}
            onClick={!hasEvent
              ? addEventToDate({ date, hour })
              : selectCellWithEvent({ date, hour })}
            hasEvent={hasEvent}
            isSelected={isSelectedCell({ date, hour })}
          />
        </Cell>
      );
    })
  );

  const renderWeekScheduleColumn = () => (
    dayHoursList.map((hour, i) => (
      <Row key={hour}>
        <CellEmpty>{hour}</CellEmpty>
        {renderWeekScheduleRow(i)}
      </Row>
    ))
  );

  return (
    <section className={className}>
      <Wrapper>
        {renderWeekScheduleColumn()}
      </Wrapper>
    </section>
  );
};

Schedule.propTypes = {
  className: string.isRequired,
  weekDays: arrayOf(object).isRequired,
  addEvent: func.isRequired,
  selectEventCell: func.isRequired,
};

const ConnectedShedule = connect((state) => ({
  listByDate: listByDateSelector(state),
  selectedCellEventData: selectEventCellSelector(state),
}), { addEvent, selectEventCell })(Schedule);

const StyledSchedule = styled(ConnectedShedule)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default StyledSchedule;
