import { ChartDataType, IsMobile, Record } from '../types/index';
import React, {FC, ReactElement, useState} from 'react';
import styled, {css} from 'styled-components';

import { Bullet } from '@nivo/bullet';
import { IC_ARROW } from '../assets/Images';
import { useMediaQuery } from "react-responsive";

const Cont = styled.div`
  ${(props: IsMobile) => props.isMobile ?
  css`
    width: 95%;
  ` : css`
    width: 600px;
  `}
  height: 320px;
  border: 2px solid ${({ theme }) => theme.colors.darkseagreen};
  border-radius: 10px;
  margin: 5px;
`;

export const Header = styled.div`
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

export const Chart = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
`;

const MonthMove = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 20px 0 20px;
  filter: invert(100%);
  cursor: pointer;
`;

const BulletChart = (data : ChartDataType[], dataLength: number): ReactElement => (
  <Bullet
    width={50 + dataLength*50}
    height={280}
    data={data}
    margin={{ top: 10, right: 40, bottom: 50, left: 20 }}
    layout="vertical"
    spacing={46}
    titleAlign="middle"
    titleOffsetX={0}
    titleOffsetY={250}
    measureSize={.4}
    markerSize={1}
    rangeColors="greens"
    measureColors="set2"
    markerColors="set1"
  />
);

type Props = {
  storeData: Record[];
}

const BulletsChart: FC<Props> = ({ storeData }) => {
  const isMobile = useMediaQuery({query : "(max-width:500px)"});
  const [month, setMonth] = useState<number>(4);
  const parsedData: ChartDataType[] = [];  
  storeData.map((el) => {
    console.log(el);
    if (el.month === month) {
      const parsingData = {
        id: el.month + '/' + el.day,
        ranges: [10],
        measures: [el.records],
        markers: [el.goal],
      };

      parsedData.push(parsingData);      
    }

    return parsedData;
  });
  
  return (
    <Cont isMobile={isMobile}>
      <Header>
        <MonthMove
          src={IC_ARROW}
          onClick={() =>
            month-1 === 0 ?
            setMonth(12) : setMonth(month - 1)
          }
        />
        {month}월 DATA
        <MonthMove
          src={IC_ARROW}
          style={{ transform: 'rotate(180deg)' }}
          onClick={() =>
            month+1 === 13 ?
            setMonth(1) : setMonth(month + 1)
          }
        />
      </Header>
      <Chart>
        { BulletChart(parsedData, storeData.length)}
      </Chart>      
    </Cont>
  );
};

export default BulletsChart;