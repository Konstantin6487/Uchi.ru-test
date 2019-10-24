import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const Plus = styled.span`
  color: red;
  user-select: none;
  font-weight: bold;
  font-size: 25px;
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

const Header = ({ className }) => (
  <header className={className}>
    <Title>Interview Calendar</Title>
    <Plus>＋</Plus>
  </header>
);

Header.propTypes = {
  className: string.isRequired,
};

const StyledHeader = styled(Header)`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: lighter;
  padding: 20px 50px 20px 50px;
`;

export default () => <Wrapper><StyledHeader /></Wrapper>;
