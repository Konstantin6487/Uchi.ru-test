import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ButterToast, { Cinnamon, POS_TOP, POS_CENTER } from 'butter-toast';
import { isValid } from 'date-fns';
import { addEvent } from '../actions';
import {
  formatDateForPromptPlaceholder,
  formatDateToHour,
  formatDateToUsa,
  parseDateFromPrompt,
  formatHourToPretty,
} from '../helpers';
import Wrapper from './Wrapper';

const Plus = styled.span`
  color: red;
  user-select: none;
  font-weight: bold;
  font-size: 25px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: #9555af;
  };
  &:active,
  &:focus {
    transform: translateY(1px);
  }
};
`;

const Title = styled.h1`
  font-size: inherit;
  font-weight: lighter;
`;

const Header = ({ className, addEvent: add }) => {
  const handleClick = () => {
    // eslint-disable-next-line
    const enteredUserDate = prompt('Enter event time: \nYYYY-MM-DD HH', `${formatDateForPromptPlaceholder(new Date())}`);
    if (enteredUserDate === null) {
      return;
    }

    const parsed = parseDateFromPrompt(enteredUserDate);

    if (!isValid(parsed)) {
      ButterToast.raise({
        content: <Cinnamon.Crisp
          scheme={Cinnamon.Crisp.SCHEME_RED}
          content={() => <div>Please retry</div>}
          title="Invalid date format!"
        />,
      });
      return;
    }

    const date = formatDateToUsa(parsed);
    const hour = formatDateToHour(parsed);

    add({ date, hour });
    ButterToast.raise({
      content: <Cinnamon.Crisp
        scheme={Cinnamon.Crisp.SCHEME_BLUE}
        content={() => <div>{`on date ${date} at ${formatHourToPretty(hour)}`}</div>}
        title="New event!"
      />,
    });
  };

  return (
    <Wrapper>
      <header className={className}>
        <Title>Interview Calendar</Title>
        <Plus onClick={handleClick}>＋</Plus>
      </header>
      <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
    </Wrapper>
  );
};

Header.propTypes = {
  className: string.isRequired,
  addEvent: func,
};

const ConnectedHeader = connect(null, {
  addEvent,
})(Header);

const StyledHeader = styled(ConnectedHeader)`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: lighter;
  padding: 20px 45px 20px 50px;
`;

export default StyledHeader;
