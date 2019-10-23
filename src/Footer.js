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
  <div className={className}>
    <Wrapper>
      <Foo>
        <Button>Today</Button>
        <Button>Delete</Button>
      </Foo>
    </Wrapper>
  </div>
);

Footer.propTypes = {
  className: string.isRequired,
};

const Wrapper = styled.div`
  max-width: 988px;
  margin: 0 auto;
`;

const Foo = styled.footer`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: lighter;
  padding-left: 50px;
  padding-right: 50px;
`;

const StyledFooter = styled(Footer)`
  padding: 20px 0 20px 0;
  background: #f3f3f3;
`;

export default StyledFooter;
