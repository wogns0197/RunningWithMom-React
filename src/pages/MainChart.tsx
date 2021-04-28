import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import BulletsChart from '../components/BulletsChart';
import CalendarChart from '../components/MonthlyChart';
import { IsMobile } from '../types/index';
import { RootState } from '../store';
import { getUserDataThunk } from '../store/DBStore';
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
  const storeData = useSelector((state: RootState) => state.UserData);
  const isMobile = useMediaQuery({query : "(max-width:500px)"});
  
  const { data, loading, error } = useSelector((state: RootState) => state.DBStore.userData);
  const dispatch = useDispatch();

  return (
    <Main isMobile={isMobile}>
      <button onClick={() => dispatch(getUserDataThunk('test123'))} />
      <div></div>
      <button onClick={() => console.log(data![0])}/>
      <BulletsChart storeData={storeData} />      
      <CalendarChart storeData={storeData} />
    </Main>
  );
};

export default MainChart;