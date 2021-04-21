import React, { FC, useState } from 'react';

import { ICON_BACK } from '../assets/Images';
import { Record } from '../types/index';
import RecordsRenderer from '../components/RecordsRenderer';
import { RootState } from '../store/Store';
import styled from 'styled-components'
import { transform } from 'typescript';
import { useSelector } from 'react-redux';

const DashBoardMain = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.pastelgreen};
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
`;

const MoveButton = styled.img`
  /* position: absolute; */
  margin: 20px;
  width: 30px;
  height: 30px;
`;

const Dashboard: FC = () => {
  const storeData = useSelector((state: RootState) => state.reducer);
  const [moveLeft, setMoveLeft] = useState<number>(0);
  
  return (
    <DashBoardMain>
      <Cont style={{        
        marginLeft: moveLeft * 400 + 'px',        
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
      <div style={{ display: 'flex', position: 'absolute', bottom:'-10px', filter:'invert(100%)'}}>
        <MoveButton src={ICON_BACK} onClick={()=>setMoveLeft(moveLeft+1)}/>
        <MoveButton src={ICON_BACK} style={{ transform: 'rotate(180deg)' }} onClick={()=>setMoveLeft(moveLeft-1)}/>
      </div>
    </DashBoardMain>
  );
}
export default Dashboard;
