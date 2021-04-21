import React, { FC } from 'react';

import { Record } from '../types/index';
import RecordsRenderer from '../components/RecordsRenderer';
import { RootState } from '../store/Store';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const DashBoardMain = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.pastelgreen};
  overflow: scroll hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MoveButton = styled.button`
  margin: 20px;
  width: 70px;
  height: 70px;
`;

const Dashboard: FC = () => {
  
  const storeData = useSelector((state: RootState) => state.reducer);
  console.log(document.body.getBoundingClientRect());
  return (
    <DashBoardMain>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>        
        {
          
          storeData.map((el, idx) => {
          return (<RecordsRenderer props={el} idx={idx} arrLength={storeData.length}/>);
        })}
      </div>
      <div style={{display:'flex'}}>
        <MoveButton />
        <MoveButton />
      </div>
    </DashBoardMain>
  );
}
export default Dashboard;
