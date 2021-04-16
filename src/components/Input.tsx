import React, { FC, useContext, useState } from 'react';
import { Record, Strength, Weather, WeatherOptions } from '../types/index';

import { RecordContext } from '../App';

export const InputInfo = () => {
  
  const today = new Date();
  const [ year, month, day ] = [ today.getFullYear(),today.getMonth()+1,today.getDate() ];
  const [goal, setName] = useState<number>(0);
  const [records, setAge] = useState<number>(0);
  const [weather, setWeather] = useState<Weather>(Weather.SUNNY);
  const [strength, setStrength] = useState<Strength>(Strength.NORMAL);
  
  const recordsCotext = useContext(RecordContext);

  return (
    <>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      }}>
        {year}년 {month}월 {day}일
      <form action="">
        <input
          type='number'
          name='goal'
          placeholder="목표치"
          value={goal}
          onChange={(e) => setName(parseInt(e.target.value))}          
        />
        <input
          type='number'
          name='records'
          placeholder="활동량"
          value={records}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
          <select
            name='weather'
            onChange={(e) =>
              setWeather(Weather[e.target.value as Weather])
          }>
            <option value=''>날씨</option>
            {Object.keys(Weather).map(el =>
              <option value={el}>{el}</option>
            )}
        </select>
          <select
            name='strength'
            onChange={(e) =>
              setStrength(Strength[e.target.value as Strength])
          }>
          <option value=''>강도</option>
          {Object.keys(Strength).map(el =>
            <option value={el}>{el}</option>
          )}
        </select>
      </form>
        <button
          className="but_summit"
          onClick={() => {
            const input: Record = {
              year: year,
              month: month,
              day: day,
              goal: goal,
              records: records,
              weather: weather,
              strength: strength,
            }
            recordsCotext.push(input);
            console.log(recordsCotext);
          }}
        />
    </div>
    </>
  );
  
}
