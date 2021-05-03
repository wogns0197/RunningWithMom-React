import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { Record } from '../types';
import RecordSum from '../uis/RecordSum';

const FLEX = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`  
  width: 100%;
  height: 50vh;  
  ${FLEX};
`;

const Title = styled.div`  

`;

type Props = {
  storeData: Record[],
}

const MonthRecord: FC<Props> = ({storeData}) => {
  
  console.log(storeData);
  const sumOfRecords =  ( storeData.length > 1 && storeData.map((el: Record) => { return el.records }).reduce((sum, current) => sum + current)) || 0;
  return (
    <Main>
      <Title>5월 총 달린 거리</Title>
      <RecordSum recordsum={sumOfRecords}/>
    </Main>
  );
}

export default MonthRecord;