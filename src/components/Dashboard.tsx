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
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
`;

const Dashboard: FC = () => {
  const storeData = useSelector((state: RootState) => state.reducer);
  const [moveLeft, setMoveLeft] = useState<number>(0);
  
  return (
    <DashBoardMain>
      <div style={ storeData.length%2===0 ?{marginLeft:'212px'}:{}}>
        <Cont style={{marginLeft: moveLeft * 420 + 'px',}}>        
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
      </div>
      <div style={{ display: 'flex', position: 'absolute', bottom:'-10px', filter:'invert(100%)'}}>
        <MoveButton
          src={ICON_BACK}
          onClick={() =>
            moveLeft<storeData.length/2 - 1 ?
            setMoveLeft(moveLeft + 1) : null  
          } />
        <MoveButton
          src={ICON_BACK}
          onClick={() =>
            -moveLeft<storeData.length/2 - 1 ?
            setMoveLeft(moveLeft - 1): null
          }
          style={{ transform: 'rotate(180deg)' }}
          />
      </div>
    </DashBoardMain>
  );
}
export default Dashboard;
