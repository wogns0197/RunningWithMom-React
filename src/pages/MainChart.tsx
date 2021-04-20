import React, { FC } from 'react';

import { Record } from '../types/index';
import { ResponsiveBullet } from '@nivo/bullet'
import { RootState } from '../store/Store';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

type CharDataType = {
  id: string|number,
  title?: React.ReactNode,
  ranges: number[],
  measures: number[],
  markers?: number[],
}

const MyResponsiveBullet = (data : CharDataType[]) => (
  <ResponsiveBullet
    data={data}
    margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
    layout="vertical"
    spacing={46}
    titleAlign="start"
    titleOffsetX={0}
    titleOffsetY={500}
    measureSize={0.2}
  />
);

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
  const tmp = [
    {
      "id": "4월 21일",
      "ranges": [100],
      "measures": [
        33
      ],
      "markers": [
        80
      ]
    },
    
  ];
  const parsedData: CharDataType[] = [];
  const storeData = useSelector((state: RootState) => state.reducer);
  storeData.map(el => {
    const parsingData = {
      id: el.month + '/' + el.day,
      ranges: [100],
      measures: [el.records],
      markers: [el.goal],
    };
    parsedData.push(parsingData);
    return parsedData;
  });
  // console.log(storeData);
  return (
    <Main>
      { MyResponsiveBullet(parsedData) }
    </Main>
  );
};

export default MainChart;