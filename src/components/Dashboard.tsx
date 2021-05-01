import { ICON_BACK, IC_EDIT, IC_RESET } from '../assets/Images';
import { Mobile, PC } from '../style/MediaQuery';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Record } from '../types';
import RecordsRenderer from '../components/RecordsRenderer';
import { RootState } from '../store';
import { getUserDataThunk } from '../store/DBStore';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";

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

const ResetIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  z-index: 9999;
  filter: invert(100%);
  cursor: pointer;
`;

const IDView = styled.div`
  position: absolute;  
  color: ${({ theme }) => theme.colors.darkgreen};
  background-color: ${({ theme }) => theme.colors.mediumseagreen};
  border: 2px solid ${({ theme }) => theme.colors.darkgreen};
  border-radius: 20px;
  right: 5px;
  top: 10px;    
  padding: 2px 12px 2px 12px;
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

const EditButton = styled.img`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  filter: invert(95%);
  cursor: pointer;
  z-index: 999;
`;

const Dashboard: FC = () => {
  
  const isMobile = useMediaQuery({ query: "(max-width:500px)" });
  const loginData = useSelector((state: RootState) => state.userinfo);
  const [moveLeft, setMoveLeft] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  // const storeData = useSelector((state: RootState) => state.UserData);
  const storeData = useSelector((state: RootState) => state.DBStore.userData).data || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataThunk(loginData.id));    
  }, [dispatch, loginData.id]);
  
  const moveCard = (isLeft: number): void => {
    storeData.length % 2 !== 0 ?
      (isLeft * moveLeft) < storeData.length / 2 - 1 && setMoveLeft(moveLeft + isLeft) : (
        isLeft === 1 ?
          (isLeft * moveLeft) < storeData.length / 2 - 1 && setMoveLeft(moveLeft + isLeft) :
          (isLeft * moveLeft) < storeData.length / 2 && setMoveLeft(moveLeft + isLeft)
      );
  };
  
  

  return (
    <DashBoardMain style={isMobile ? { height: '45vh' } : {}}>
      <div style={storeData?.length % 2 === 0 ? { marginLeft: '212px' } : {}}>
        <ResetIcon src={IC_RESET} onClick={() => dispatch(getUserDataThunk(loginData.id)) }/>
        {loginData.id && (<IDView>{loginData.id}</IDView>)}
        <Cont style={{marginLeft: moveLeft * 420 + 'px'}}>        
          {          
            storeData.map((el: Record, idx: number) => {
              return (
                <RecordsRenderer
                  props={el}
                  idx={idx}
                  arrLength={storeData.length}
                  focus={moveLeft}
                  isEdit={isEdit}
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
    <EditButton src={IC_EDIT} onClick={() => setIsEdit(!isEdit)} />
    </DashBoardMain>
  );
}
;

export default Dashboard;
