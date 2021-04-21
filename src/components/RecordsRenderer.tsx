import React, { FC } from 'react';

import { Record } from '../types/index';
import RunningGage from '../uis/RunningGage';
import styled from 'styled-components';

const Column = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px 5px 0 5px;
  width: 200px;
  min-width: 200px;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.darkseagreen};
  border-radius: 10px;
  /* color: white; */
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: 1px 0px 20px #5d5d5d;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

type Props = {
  props: Record,
  idx: number,
  arrLength: number,
}
// 0 1 2 3 4 
const Records: FC<Props> = ({ props, idx, arrLength }) => {
  const { year, month, day, weather, goal, records, memo, strength } = props;
  // console.log(idx, Math.floor(arrLength/2)+1);  
  const pivot = Math.floor(arrLength / 2);
  return (
    <Column
      style={idx === pivot ? {
        zIndex:999,
        border: '1px solid red',
        width: '250px',
        height: '350px',        
      } : ({}
      // idx < pivot ?
      // {
      //   left: (idx+pivot+1) * (100) + 'px',
      // } : {
      //   right: idx * (100) + 'px',
      // }
      )
      }>
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