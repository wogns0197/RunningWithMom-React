import React, { FC } from 'react';

import BulletsChart from '../components/BulletsChart';
import CalendarChart from '../components/MonthlyChart';
import { RootState } from '../store/Store';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Main = styled.div`
  width: 100%;
  height: 100vh;
`;  
const MainChart: FC = () =>
{
  const storeData = useSelector((state: RootState) => state.reducer);
  
  return (
    <Main>
      <BulletsChart storeData={storeData} />      
      <CalendarChart storeData={storeData} />
    </Main>
  );
};

export default MainChart;