import React, { FC, useState } from 'react';
import { Record, Strength, Weather } from '../types/index';

import { IC_ARROW } from '../assets/Images';
import { SelectStrength } from '../uis/SelectStrength';
import { SelectWeather } from '../uis/SelectWeather';
import { inputData } from '../store/Store';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from "react-responsive";

const Cont = styled.div`
  margin-top: 20px;
  height: 300px;
  /* width: 100%; */
  border: 3px solid ${({ theme }) => theme.colors.pastelgreen};
  border-radius: 10px;
`;

const TodayText = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.pastelgreen};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: -1px 0 ${({ theme }) => theme.colors.darkseagreen},
    0 1px ${({ theme }) => theme.colors.darkseagreen},
    1px 0 ${({ theme }) => theme.colors.darkseagreen},
    0 -1px ${({ theme }) => theme.colors.darkseagreen};
  font-size: 20pt;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;  
  align-items: center;
`;

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.seagreen};
  border: 3px solid ${({ theme }) => theme.colors.mediumseagreen};  
  border-radius: 5px;
  /* margin: 10px; */
  height: 40px;
  text-align: center;  
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const MonthMove = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 20px 0 20px;
  filter: invert(100%);
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.seagreen};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({theme}) => theme.colors.green};
  border-radius: 5px;
  margin-top: 20px;
  width: 100px;
  height: 30px;  
  font-weight: bold;
  font-size: 14pt;
`;

const getLastDate = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
};

export const InputInfo: FC = () => {
  const today = new Date();
  const [year, month, [day,setDay] ] = [today.getFullYear(), today.getMonth()+1, useState<number>(today.getDate())];
  const [goal, setGoal] = useState<number>(0);
  const [records, setRecords] = useState<number>(0);
  const [memo, setMemo] = useState<string>('');
  const [weather, setWeather] = useState<Weather>(Weather.SUNNY);
  const [strength, setStrength] = useState<Strength>(Strength.NORMAL);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({query : "(max-width:500px)"});
  
  return (
    <Cont>      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: isMobile ? '100vw' : '40vw',
      }}>
        <TodayText>
          <MonthMove
            src={IC_ARROW}
            onClick={() => {
              setDay(day - 1);
            }}
          />
          {year}년 {month}월 {day}일
          <MonthMove
            src={IC_ARROW}
            style={{ transform: 'rotate(180deg)' }}
            onClick={() => setDay(day+1)}
          />
        </TodayText>
        
        <Form>          
          <div style={{marginTop:'10px'}}>
            <StyledInput
              style={{
                width: '60px',
                fontWeight: 'bold',
                fontSize: '16pt',
                borderRight: 'none',
                borderTopRightRadius: '0',
                borderBottomRightRadius: '0',
              }}
              type="number"
              name="records"
              placeholder="활동량"
              value={records || undefined}
              onChange={(e) =>
                parseFloat(e.target.value) <= 10 ?
                setRecords(parseFloat(e.target.value)) : setRecords(0)}
            />
            <StyledInput
              style={{
                width: '60px',
                fontWeight: 'bold',
                fontSize: '16pt',
                borderLeft: 'none',
                borderTopLeftRadius: '0',
                borderBottomLeftRadius: '0',
              }}
              type="number"
              name="goal"
              placeholder="목표치"
              value={goal || undefined}
              onChange={(e) =>
                parseFloat(e.target.value) <= 10 ?
                setGoal(parseFloat(e.target.value)) : setGoal(0)}
            />
          </div>
          <StyledInput
            style={{
              margin: '10px',
              width: '160px',
            }}
            type="text"
            name="memo"
            placeholder="memo"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
          <SelectWeather setWeather={setWeather} />
          <SelectStrength setStrength={setStrength} />          
        </Form>
          <SubmitButton
            className="but_summit"
            onClick={() => {
              const input: Record = {
                key: today.toLocaleString().split(". "),
                year: year,
                month: month,
                day: day,
                goal: goal,
                records: records,
                memo: memo,
                weather: weather,
                strength: strength,
              };
              
              dispatch(inputData(input));
            }}
          >등록</SubmitButton>          
      </div>
    </Cont>
  );
  
};
