import React, { FC } from 'react';
import styled, {css} from 'styled-components';

import { ICON_WEATHER } from '../assets/Images';
import { Record } from '../types/index';
import RunningGage from '../uis/RunningGage';
import StrengthUI from '../uis/StrengthUI';
import theme from '../style/theme';
import { useMediaQuery } from "react-responsive"

const Flex = css`
  display: flex;
`

const Cont = styled.div`
  ${Flex};
  flex-direction: column;
  justify-content: space-between;
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
  width: 100%;
  ${Flex};
  justify-content: center;  
`;

const Date = styled.div`  
  background-color: ${({ theme }) => theme.colors.darkseagreen};
  color: ${({ theme }) => theme.colors.white};
  width: 101%;
  height: 40px;
  margin-top: -3px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  ${Flex};
  align-items: center;
  justify-content: center;
  transition-duration: .4s;
  transition-timing-function: ease-in-out;
`
const RecordbyGoal = styled.div`
  width: 130px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.mediumgreen};
  border-radius: 5px;
  ${Flex};
  flex-direction: column;
`;

const Column = styled.div`
  ${Flex};
  justify-content: space-evenly;
  align-items: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  overflow: hidden;
`

const RecGoal = styled.div`
  ${Flex};
  font-size: 16pt;
  color: ${({theme}) => theme.colors.darkgreen};
`

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
  const pivot = arrLength % 2 === 0 ? Math.floor(arrLength / 2) - 1 - focus : Math.floor(arrLength / 2) - focus;  
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });  
  
  return (
    <Cont
      style={idx === pivot ? {
        zIndex:999,
        border: '5px solid'+ theme.colors.darkseagreen,        
        height: isMobile ? '270px' : '350px',
        width : isMobile ? '150px' : '250px',
      } : {
          opacity: '.9',
          height: isMobile ? '230px' : '300px',
          width : isMobile ? '150px' : '200px',
      }
      }>
      <Date style={ idx === pivot ? {fontWeight:'bold', fontSize:'16pt'}: {}}>
        {year}년 {month}월 {day}일
      </Date>
      <RunningGage goal={goal} record={records}/>
      <RecordbyGoal>
        <Column
          style={{
            backgroundColor: theme.colors.darkseagreen,
            color: theme.colors.white,
            height: '40%',            
          }}>
          <div>기록</div>
          <div>목표</div>
        </Column>
        <Column
          style={{height: '60%', fontWeight:'bold'}}
        >
          <RecGoal>
            {records}
            <div
              style={{
                marginLeft:'2px',
                marginTop: '8px',
                fontWeight: 300,
                fontSize: '8pt'
              }}>km</div>
          </RecGoal>
          <div
            style={{
              width: '2px',
              height: '120%',
              backgroundColor: theme.colors.darkseagreen,
              transform: 'rotate(20deg)',
            }}
          />
          <RecGoal>
            {goal}
            <div
              style={{
                marginLeft:'2px',
                marginTop: '8px',
                fontWeight: 300,
                fontSize: '8pt'
              }}>km</div>
          </RecGoal>
        </Column>        
         {/* 메모 : {memo} */}
      </RecordbyGoal>
      <Content style={{justifyContent:'space-evenly', marginBottom:'10px'}}>
        <DetailIcon src={ICON_WEATHER[weather]}/>
        <StrengthUI color={theme.strengthColor[strength]}/>
      </Content>
    </Cont>
  );
};

export default Records;