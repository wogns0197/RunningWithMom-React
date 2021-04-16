import '../css/RecordsRenderer.css'

import React, { FC, ReactElement } from 'react';
import { Record, Strength, Weather } from '../types/index';

type Props = {
  props: Record,
}

const Records: FC<Props> = ({ props }) => {
  const { year, month, day, weather, goal, records, strength } = props;
  return (
    <div className="column">
      <div className="today">
        {year}년 {month}월 {day}일
      </div>
      <div className="details" style={{marginLeft:'40px'}}>
        목표 : {goal} 기록 : {records}
      </div>
      <div className="conditions" style={{marginLeft:'40px'}}>
        날씨 : {weather} 강도 : {strength}
      </div>
    </div>
  );
};

export default Records;