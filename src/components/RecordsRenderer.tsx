import React, { FC } from 'react';

import { ICON_WEATHER } from '../assets/Images';
import { Record } from '../types/index';
import RunningGage from '../uis/RunningGage';
import StrengthUI from '../uis/StrengthUI';
import styled from 'styled-components';
import theme from '../style/theme';

const Column = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 5px 0 5px;
  width: 200px;
  min-width: 200px;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.darkseagreen};
  border-radius: 10px;
  /* color: white; */
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: 1px 0px 20px #90aa97;
  transition-duration: .4s;
  transition-timing-function: ease-in-out;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailIcon = styled.img`
  width: 50px;
  height: 50px;
`

type Props = {
  props: Record,
  idx: number,
  arrLength: number,
  focus: number,
}

const Records: FC<Props> = ({ props, idx, arrLength, focus }) => {
  const { year, month, day, weather, goal, records, memo, strength } = props;
  // console.log(idx, Math.floor(arrLength/2)+1);  
  const pivot = Math.floor(arrLength / 2) - focus;
  return (
    <Column
      style={idx === pivot ? {
        zIndex:999,
        border: '5px solid'+ theme.colors.darkseagreen,
        width: '250px',
        height: '350px',        
      } : ({opacity:'.9'}
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
        <DetailIcon src={ICON_WEATHER[weather]}/>
        <StrengthUI color={theme.strengthColor[strength]}/>
      </Content>
    </Column>
  );
};

export default Records;