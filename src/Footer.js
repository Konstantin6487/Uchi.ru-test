import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.span`
  font-size: inherit;
  font-weight: lighter;
  color: red;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #9555af;
  };
  &:active,
  &:focus {
    transform: translateY(1px);
  };
`;

const Footer = ({ className }) => (
  <footer className={className}>
    <Button>Today</Button>
    <Button>Delete</Button>
  </footer>
);

Footer.propTypes = {
  className: string.isRequired,
};

const StyledFooter = styled(Footer)`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: lighter;
  padding: 20px 45px 20px 45px;
  background: #f3f3f3;
`;

export default StyledFooter;
