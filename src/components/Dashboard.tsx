import React, { FC, useState } from 'react';

import { Record } from '../types/index';
import RecordsRenderer from '../components/RecordsRenderer';
import { RootState } from '../store/Store';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const DashBoardMain = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.pastelgreen};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`;

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
`;

const MoveButton = styled.button`
  margin: 20px;
  width: 70px;
  height: 70px;
`;

const Dashboard: FC = () => {
  const storeData = useSelector((state: RootState) => state.reducer);
  const [moveLeft, setMoveLeft] = useState<number>(0);

  return (
    <DashBoardMain>
      <Cont style={{        
        marginRight: moveLeft * 400 + 'px',        
      }}>        
        {          
          storeData.map((el, idx) => {
            return (
              <RecordsRenderer
                props={el}
                idx={idx}
                arrLength={storeData.length}
                focus={moveLeft}
              />);
        })}
      </Cont>
      <div style={{display:'flex'}}>
        <MoveButton onClick={()=>setMoveLeft(moveLeft+1)}/>
        <MoveButton onClick={()=>setMoveLeft(moveLeft-1)}/>
      </div>
    </DashBoardMain>
  );
}
export default Dashboard;
