import React, { FC, useState } from 'react';
import { Record, Strength, Weather } from '../types/index';
import { RootState, inputData } from '../store/Store';
import { useDispatch, useSelector } from 'react-redux';

import RunningGage from '../uis/RunningGage';
import styled from 'styled-components';

type Props = {
  recordList: Record[],  
  setIsSubmit: (isSubmit: boolean) => void,
}

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

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.seagreen};
  border: 3px solid ${({ theme }) => theme.colors.green};  
  border-radius: 5px;
  margin: 10px;
  height: 40px;
  text-align: center;
`;

const StyledSelect = styled.select`
  color: ${({ theme }) => theme.colors.seagreen};
  border: 3px solid ${({ theme }) => theme.colors.green};
  border-radius: 5px;
  margin: 10px;
  height: 40px;
  text-align: center;
`;

export const InputInfo: FC<Props> = ({recordList, setIsSubmit}) => {
  
  const today = new Date();
  const [year, month, day] = [today.getFullYear(), today.getMonth()+1, today.getDate()];
  const [goal, setName] = useState<number>(0);
  const [records, setAge] = useState<number>(0);
  const [memo, setMemo] = useState<string>('');
  const [weather, setWeather] = useState<Weather>(Weather.SUNNY);
  const [strength, setStrength] = useState<Strength>(Strength.NORMAL);

  const dispatch = useDispatch();
  const storeData = useSelector((state: RootState) => state.reducer);
  return (
    <>    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      }}>
        {year}년 {month}월 {day}일
      <form action="">
        <RunningGage goal={goal} record={records} />
        <StyledInput
          style={{
            width: '60px',
            fontWeight: 'bold',
            fontSize: '16pt',
          }}
          type='text'
          name='goal'
          placeholder="목표치"
          value={goal || undefined}
          onChange={(e) => setName(parseInt(e.target.value))}          
        />
        <StyledInput
          style={{
            width: '60px',
            fontWeight: 'bold',
            fontSize: '16pt',
          }}
          type='text'
          name='records'
          placeholder="활동량"
          value={records || undefined}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <StyledInput
          type='text'
          name='memo'
          placeholder='memo'
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
        <StyledSelect
          name='weather'
          onChange={(e) =>
            setWeather(Weather[e.target.value as Weather])
        }>
          <option value=''>날씨</option>
          {Object.keys(Weather).map(el =>
            <option value={el}>{el}</option>
          )}
        </StyledSelect>
        <StyledSelect
          name='strength'
          onChange={(e) =>
            setStrength(Strength[e.target.value as Strength])
          }>
          <option value=''>강도</option>
          {Object.keys(Strength).map(el =>
            <option value={el}>{el}</option>
          )}
        </StyledSelect>
      </form>
        <SubmitButton
          className="but_summit"
          onClick={() => {
            const input: Record = {
              key: 0,
              year: year,
              month: month,
              day: day,
              goal: goal,
              records: records,
              memo: memo,
              weather: weather,
              strength: strength,
            };
            setIsSubmit(true);
            // setRecordList([...recordList,input]);
            dispatch(inputData(input));
          }}
        >등록</SubmitButton>
        <SubmitButton
          onClick={() => console.log(storeData)}
        >TMP</SubmitButton>
    </div>
    </>
  );
  
}
