import React, { FC } from 'react';

import { Record } from '../types/index';
import RunningGage from '../uis/RunningGage';
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 5px 0 5px;
  width: 200px;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.darkseagreen};
  border-radius: 10px;
  /* color: white; */
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

type Props = {
  props: Record,
}

const Records: FC<Props> = ({ props }) => {
  const { year, month, day, weather, goal, records, memo, strength } = props;
  
  return (
    <Column>
      <Content>
        {year}년 {month}월 {day}일
      </Content>
      <RunningGage goal={goal} record={records}/>
      <Content>
        목표 : {goal} 기록 : {records}
         {/* 메모 : {memo} */}
      </Content>
      <Content>
        날씨:{weather} 강도:{strength}
      </Content>
    </Column>    
  );
};

export default Records;