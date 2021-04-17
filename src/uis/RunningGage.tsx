import React, { FC } from 'react';

import styled from 'styled-components';

type Props = {
  goal: number,
  record: number,
};

const StyledBar = styled.div`
  position: relative;
  border: 2px solid #008080;
  border-radius: 5px;
  width: 100px;
  height: 30px;
`;
const GoalBar = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: #008080;
  opacity: .4;
`;
const RecordBar = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  background-color: #008080;
`;

const RunningGage: FC<Props> = ({ goal, record }) => {
  const goalwidth = goal + '%';
  const recordwidth = record + '%';
  return (
    <StyledBar>
      <GoalBar
        style={{width:goalwidth}}
      />
      <RecordBar
        style={{width:recordwidth}}
      />
    </StyledBar>
  );
}

export default RunningGage;