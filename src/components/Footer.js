import React from 'react';
import { string, func, object } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { isEmpty, throttle } from 'lodash';
import Wrapper from './Wrapper';
import { selectEventCellSelector, getActiveDay } from '../selectors';
import { reset, removeEvent } from '../actions';
import { formatDateToUsa } from '../helpers';

const Button = styled.span`
  font-size: inherit;
  font-weight: lighter;
  color: ${({ isDisable }) => (!isDisable ? 'red' : '#ccc')};
  user-select: none;
  cursor: ${({ isDisable }) => (!isDisable && 'pointer')};
  &:hover {
    color: ${({ isDisable }) => (!isDisable ? '#9555af' : '#ccc')};
  };
  &:active,
  &:focus {
    transform: ${({ isDisable }) => !isDisable && 'translateY(1px)'};
  };
`;

const Footer = ({
  className,
  activeDay,
  selectedCellEventData,
  reset: resetToCurrentDay,
  removeEvent: removeSelectedCellEvent,
}) => {
  const isScheduleOnCurrentDay = formatDateToUsa(new Date()) === activeDay;
  const handleClickLeftBtn = throttle(() => {
    resetToCurrentDay();
  }, 100);

  const handleClickRightBtn = throttle(() => {
    removeSelectedCellEvent(selectedCellEventData);
  }, 100);

  return (
    <div className={className}>
      <Wrapper>
        <FlexWrap>
          <Button
            isDisable={isScheduleOnCurrentDay}
            left
            onClick={!isScheduleOnCurrentDay ? handleClickLeftBtn : undefined}
          >
            Today
          </Button>
          {!isEmpty(selectedCellEventData) && (
            <Button onClick={handleClickRightBtn}>Delete</Button>
          )}
        </FlexWrap>
      </Wrapper>
    </div>
  );
};

Footer.propTypes = {
  className: string.isRequired,
  activeDay: string.isRequired,
  selectedCellEventData: object,
  removeEvent: func.isRequired,
  reset: func.isRequired,
};

const FlexWrap = styled.footer`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: lighter;
  padding-left: 50px;
  padding-right: 50px;
`;

const ConnectedFooter = connect((state) => ({
  activeDay: getActiveDay(state),
  selectedCellEventData: selectEventCellSelector(state),
}), { reset, removeEvent })(Footer);

const StyledFooter = styled(ConnectedFooter)`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px 0 20px 0;
  background: #f3f3f3;
  box-shadow: 0 -2px 5px -5px #333;
`;

export default StyledFooter;
