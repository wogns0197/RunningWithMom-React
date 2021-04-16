import '../css/Dashboard.css';

import React, { FC } from 'react';
import styled, { ThemeContext }  from 'styled-components'

import {Record} from '../types/index';
import RecordsRenderer from '../components/RecordsRenderer';
import { useContext } from 'react-dom/node_modules/@types/react';

const DashBoardMain = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${({theme}) => theme.colors.pastelgreen};
`;

type Props = {
  recordList: Record[]
}

const Dashboard: FC<Props> = ({ recordList }) => {
  
  return (
    <DashBoardMain>
      <div className="record">
        {recordList.map(el =>
          (<RecordsRenderer props={el} />)
        )}
      </div>
    </DashBoardMain>
  );
}
export default Dashboard;
