import React, { FC } from 'react';

import RecordsRenderer from '../components/RecordsRenderer';
import { RootState } from '../store/Store';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const DashBoardMain = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.pastelgreen};
  overflow-x: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;

const Dashboard: FC = () => {
  const storeData = useSelector((state: RootState) => state.reducer);
  return (
    <DashBoardMain>      
      {storeData.map(el =>
        (<RecordsRenderer props={el} />)
      )}    
    </DashBoardMain>
  );
}
export default Dashboard;
