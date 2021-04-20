import React, { FC } from 'react';

import { Bullet } from '@nivo/bullet';
import { CharDataType } from '../types/index';
import { Record } from '../types/index';
import styled from 'styled-components'

const Cont = styled.div`
  width: 500px;
  height: 520px;
  border: 2px solid ${({ theme }) => theme.colors.darkseagreen};
  border-radius: 10px;
  margin: 5px;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.pastelgreen};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: -1px 0 ${({ theme }) => theme.colors.darkseagreen},
    0 1px ${({ theme }) => theme.colors.darkseagreen},
    1px 0 ${({ theme }) => theme.colors.darkseagreen},
    0 -1px ${({ theme }) => theme.colors.darkseagreen};
  font-size: 20pt;
  font-weight: bold;
`;

const Chart = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
`;

const MyResponsiveBullet = (data : CharDataType[], dataLength: number) => (
  <Bullet
    width={500 + dataLength*50}
    height={480}
    data={data}
    margin={{ top: 10, right: 20, bottom: 30, left: 20 }}
    layout="vertical"
    spacing={46}
    titleAlign="middle"
    titleOffsetX={0}
    titleOffsetY={440}
    measureSize={0.2}
    rangeColors="greens"
    measureColors="set2"
    markerColors="accent"
  />
);

type Props = {
  storeData: Record[];
}

const BulletsChart: FC<Props> = ({ storeData }) => {
  const parsedData: CharDataType[] = [];
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
  return (
    <Cont>
      <Header>
        4월 DATA
      </Header>
      <Chart>
        { MyResponsiveBullet(parsedData, storeData.length)}
      </Chart>      
    </Cont>
  );
}

export default BulletsChart;