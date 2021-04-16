import '../css/Dashboard.css';

import React, { ReactElement, useContext, useEffect } from 'react';

import { RecordContext } from '../App';
import RecordsRenderer from '../components/RecordsRenderer';

// import {Record, Strength, Weather} from '../types/index';


const Dashboard = (): ReactElement => {
  const recordsCotext = useContext(RecordContext);
  return (
    <div className="dashmain">
      <div className="record">
        {recordsCotext.map(el =>
          (<RecordsRenderer props={el} />)
        )}
      </div>
    </div>
  );
}
export default Dashboard;
