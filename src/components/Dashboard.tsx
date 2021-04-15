import '../css/Dashboard.css';

import React, { ReactElement } from 'react';
import {Record, Strength, Weather} from '../types/index';

import RecordsRenderer from '../components/RecordsRenderer';

const Dashboard = (): ReactElement => {
  const obj: Record = {
    today: {
      year: 2021,
      month: 4,
      day: 16,
    },
    goal: 100,
    records: 70,
    weather: Weather.SUNNY,    
    strength : Strength.NORMAL,
  };
  
  return (
    <div className="dashmain">
      <div className="record">
        <RecordsRenderer props={obj}/>
      </div>
    </div>
  );
}
export default Dashboard;
