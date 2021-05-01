import React, { FC, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import BulletsChart from '../components/BulletsChart';
import CalendarChart from '../components/MonthlyChart';
import { IsMobile } from '../types/index';
import { RootState } from '../store';
import { getUserDataThunk } from '../store/DBStore';
import { useHistory }from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  ${(props: IsMobile) => props.isMobile ? Mobilestyled : PCstyled}
`;

const PCstyled = css`
`;

const Mobilestyled = css`
  ${({ theme }) => theme.Flex};
  flex-direction: column;
  align-items: center;  
`;

const MainChart: FC = () => {  
  const storeData = useSelector((state: RootState) => state.DBStore.userData).data || [];
  const loginData = useSelector((state: RootState) => state.userinfo);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserDataThunk(loginData.id));    
  }, [dispatch, loginData.id]);
  const isMobile = useMediaQuery({query : "(max-width:500px)"});
  
  !loginData.id && history.push("MyPage");

  return (
    <Main isMobile={isMobile}>      
      <BulletsChart storeData={storeData} />      
      <CalendarChart storeData={storeData} />
    </Main>
  );
};

export default MainChart;