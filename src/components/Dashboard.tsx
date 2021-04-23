import { Mobile, PC } from '../style/MediaQuery';
import React, { FC, useState } from 'react';

import { ICON_BACK } from '../assets/Images';
import { Record } from '../types/index';
import RecordsRenderer from '../components/RecordsRenderer';
import { RootState } from '../store/Store';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import { useSelector } from 'react-redux';

const DashBoardMain = styled.div`
  position: relative;
  width: 100%;
  height: 45vh;
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
  margin: 20px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
`;

const MobileMove = styled.div`
  position: absolute;
  width: 100px;
  height: 100%;
  z-index: 999;
`;


const Dashboard: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width:500px)" });
  const storeData = useSelector((state: RootState) => state.reducer);
  const [moveLeft, setMoveLeft] = useState<number>(0);

  const moveCard = (isLeft: number): void => {
    storeData.length % 2 !== 0 ?
      (isLeft * moveLeft) < storeData.length / 2 - 1 && setMoveLeft(moveLeft + isLeft) : (
        isLeft === 1 ?
          (isLeft * moveLeft) < storeData.length / 2 - 1 && setMoveLeft(moveLeft + isLeft) :
          (isLeft * moveLeft) < storeData.length / 2 && setMoveLeft(moveLeft + isLeft)
      );
  };
  
  

  return (
    <DashBoardMain style={isMobile ? { height: '40vh' } : {}}>
      <div style={ storeData.length%2===0 ?{marginLeft:'212px'}:{}}>
        <Cont style={{marginLeft: moveLeft * 420 + 'px'}}>        
          {          
            storeData.map((el: Record, idx: number) => {
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
      <PC>
        <div style={{ display: 'flex', position: 'absolute', bottom: '-10px', filter: 'invert(100%)' }}>        
          <MoveButton
            src={ICON_BACK}
            onClick={() => moveCard(1)} />
          <MoveButton
            src={ICON_BACK}
            onClick={() => moveCard(-1)}
            style={{ transform: 'rotate(180deg)' }}
          />        
        </div>
      </PC>
      <Mobile>
        <MobileMove style={{left:0}} onClick={() => moveCard(1)} />
        <MobileMove style={{right:0}} onClick={() => moveCard(-1)}/>        
      </Mobile>
      
    </DashBoardMain>
  );
}
;

export default Dashboard;
