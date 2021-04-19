import '../css/Dashboard.css';

import React, { FC } from 'react';

import RecordsRenderer from '../components/RecordsRenderer';
import { RootState } from '../store/Store';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const DashBoardMain = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${({theme}) => theme.colors.pastelgreen};
`;

// type Props = {
//   recordList: Record[]
// }

const Dashboard: FC = () => {
  const recordList = useSelector((state: RootState) => state.reducer);
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
