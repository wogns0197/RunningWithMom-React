import React, { FC } from 'react';
import styled, {css} from 'styled-components';

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
  ${FLEX};  
`;

const Cont = styled.div`
  width: 70%;
  height: 400px;
  border: 1px solid red;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
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
      <Cont>
        <RecordSum recordsum={sumOfMonth(4, storeData)} />
        <RecordSum recordsum={sumOfMonth(4, storeData)} />
        <RecordSum recordsum={sumOfMonth(5, storeData)} />
        <RecordSum recordsum={sumOfMonth(6, storeData)} />
      </Cont>
    </Main>
  );
}

export default MonthlyList;