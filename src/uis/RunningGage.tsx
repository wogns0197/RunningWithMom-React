import React, { FC } from 'react';

import styled from 'styled-components';

type Props = {
  goal: number,
  record: number,
};

const StyledBar = styled.div`
  position: relative;
  border: 2px solid ${({theme}) => theme.colors.mediumgreen};
  border-radius: 5px;
  width: 130px;
  height: 20px;
`;

const GoalBar = styled.div`
  position: absolute;
  height: 100%;
  background-color: ${({theme}) => theme.hexToRgba(theme.colors.mediumgreen, .4)};
`;

const RecordBar = styled.div`
  position: absolute;
  height: 100%;
  background-color: ${({theme}) => theme.colors.mediumgreen};
`;

const RunningGage: FC<Props> = ({ goal, record }) => {
  const goalwidth = goal%1 === 0 ? goal + '0%' : parseInt(goal*10 +'') + '.0%';
  const recordwidth = record%1 ===0 ? record + '0%' : parseInt(record*10 +'') + '.0%';
  
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
};

export default RunningGage;