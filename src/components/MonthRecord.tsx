import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import MonthlyList from '../components/MonthlyList';
import { Record } from '../types';

const FLEX = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`  
  width: 100vw;
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
  return (
    <Main>
      <Title>5월 총 달린 거리</Title>
      <MonthlyList storeData={storeData} />
    </Main>
  );
}

export default MonthRecord;