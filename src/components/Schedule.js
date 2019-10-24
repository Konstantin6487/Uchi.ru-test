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
import Wrapper from './Wrapper';
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
  background: ${({ hasEvent }) => hasEvent && 'gray'};
  background: ${({ isSelected, hasEvent }) => isSelected && hasEvent && '#ADD8E6'};
  flex-basis: 100%;
  &:hover {
    cursor: ${({ isSelected, hasEvent }) => (!isSelected || !hasEvent) && 'pointer'};
    background: ${({ isSelected, hasEvent }) => !isSelected && !hasEvent && 'lightgray'};
  };
`;

const CellEmpty = styled(Cell)`
  border: none;
  align-items: flex-end;
  justify-content: right;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-around;
`;

const HourMark = styled.span`
  position: absolute;
  right: 5%;
  top: 82%;
`;

const Schedule = ({
  className,
  weekDays,
  addEvent: add,
  selectEventCell: selectCell,
  selectedCellEventData: selectedEventData,
  listByDate,
}) => {
  const dayHoursList = Array.from({ length: 24 }, (_, i) => (i < 10 ? `0${i}:00` : `${i}:00`));

  const hasEventOnDate = (date, hour) => !!get(listByDate, [`${date}`, `${hour}`]);
  const isSelectedCell = ({ date: cellDate, hour: cellHour }) => {
    const { date: eventDate, hour: eventHour } = selectedEventData;
    return eventDate === cellDate && eventHour === cellHour;
  };
  const addEventToDate = (data) => () => add(data);
  const selectCellWithEvent = (eventData) => () => selectCell(eventData);

  const renderWeekScheduleRow = (hour) => (
    weekDays.map(({ date }) => {
      const hasEvent = hasEventOnDate(date, hour);
      const isSelected = isSelectedCell({ date, hour });

      const handleCellClick = () => {
        if (hasEvent && isSelected) {
          return undefined;
        }
        return !hasEvent
          ? addEventToDate({ date, hour })
          : selectCellWithEvent({ date, hour });
      };

      return (
        <Cell key={`${date}-${hour}`}>
          <CellInner
            date={date}
            hour={hour}
            onClick={handleCellClick()}
            hasEvent={hasEvent}
            isSelected={isSelected}
          />
        </Cell>
      );
    })
  );

  const renderWeekScheduleColumn = () => (
    dayHoursList.map((hour, i) => (
      <Row key={hour}>
        <CellEmpty>
          <HourMark>{hour}</HourMark>
        </CellEmpty>
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
  addEvent: func,
  selectEventCell: func,
  listByDate: object,
  selectedCellEventData: object,
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
