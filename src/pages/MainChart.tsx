import React, { FC } from 'react';

import { RootState } from '../store/Store';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

type Props = {
  key: string,
  year: number,
  month: number,
  day: number,
  goal: number,
  records: number,
  // weather: Weather,
  // strength: Strength,
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainChart: FC<Props> = ({
  key,
  year,
  month,
  day,
  goal,
  records }) =>
{
  const storeData = useSelector((state: RootState) => state.reducer);
  
  return (
    <Main></Main>
  );
};

export default MainChart;