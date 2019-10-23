import React from 'react';

import styled from 'styled-components';
import { string } from 'prop-types';

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
  flex-basis: 100%;
  &:hover {
    background: gray;
  };
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

const Schedule = ({ className }) => (
  <section className={className}>
    <Wrapper>
      <Row>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
      </Row>
      <Row>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
      </Row>
      <Row>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
      </Row>
      <Row>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
      </Row>
      <Row>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
        <Cell><CellInner /></Cell>
      </Row>
    </Wrapper>
  </section>
);

Schedule.propTypes = {
  className: string.isRequired,
};

const StyledSchedule = styled(Schedule)`
`;

export default StyledSchedule;
