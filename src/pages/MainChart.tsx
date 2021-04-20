import React, { FC } from 'react';

import BuletsChart from '../components/BulletsChart';
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
      <BuletsChart storeData={storeData} />
    </Main>
  );
};

export default MainChart;