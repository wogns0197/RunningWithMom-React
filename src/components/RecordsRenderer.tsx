import React, { FC } from 'react';

import { Record } from '../types/index';
import RunningGage from '../uis/RunningGage';
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid white;
  color: white;
  background-color: rgb(25, 12, 65);
`;

type Props = {
  props: Record,
}

const Records: FC<Props> = ({ props }) => {
  const { year, month, day, weather, goal, records, memo, strength } = props;
  
  return (
    <Column>
      <div className="today">
        {year}년 {month}월 {day}일
      </div>
      <RunningGage goal={goal!} record={records}/>
      <div className="details" style={{marginLeft:'40px'}}>
        목표 : {goal} 기록 : {records} 메모 : {memo}
      </div>
      <div className="conditions" style={{marginLeft:'40px'}}>
        날씨 : {weather} 강도 : {strength}
      </div>
    </Column>    
  );
};

export default Records;