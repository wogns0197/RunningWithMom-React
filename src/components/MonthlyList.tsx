import React, { FC } from 'react';

import { Record } from '../types';
import RecordSum from '../uis/RecordSum';
import styled from 'styled-components';

const Main = styled.div`
  width: 600px;
`;

type Props = {
  storeData: Record[],
};

const sumOfMonth = (month: number, data: Record[]): number => {
  const arr: number[] = [];
  data.map((el: Record) => {
    return el.month === month && arr.push(el.records);
  })
  return (arr.length > 0 && arr.reduce((sum, current) => sum + current)) || 0;
}

const MonthlyList: FC<Props> = ({ storeData }) => {
  
  return (
    <Main>
      <RecordSum recordsum={sumOfMonth(5, storeData)} />
      <RecordSum recordsum={sumOfMonth(4, storeData)} />
    </Main>
  );
}

export default MonthlyList;