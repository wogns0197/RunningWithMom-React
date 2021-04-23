import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import BulletsChart from '../components/BulletsChart';
import CalendarChart from '../components/MonthlyChart';
import { IsMobile } from '../types/index';
import { RootState } from '../store/Store';
import { useMediaQuery } from "react-responsive";
import { useSelector } from 'react-redux';

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
  const storeData = useSelector((state: RootState) => state.reducer);
  const isMobile = useMediaQuery({query : "(max-width:500px)"});
  
  return (
    <Main isMobile={isMobile}>
      <BulletsChart storeData={storeData} />      
      <CalendarChart storeData={storeData} />
    </Main>
  );
};

export default MainChart;