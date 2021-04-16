import '../css/Dashboard.css';

import React, { FC, ReactElement } from 'react';
import {Record, Strength, Weather} from '../types/index';

import RecordsRenderer from '../components/RecordsRenderer';

type Props = {
  recordList: Record[]
}

const Dashboard: FC<Props> = ({ recordList }) => {
  return (
    <div className="dashmain">
      <div className="record">
        {recordList.map(el =>
          (<RecordsRenderer props={el} />)
        )}
      </div>
    </div>
  );
}
export default Dashboard;
