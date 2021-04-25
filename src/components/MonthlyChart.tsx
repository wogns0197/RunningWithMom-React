import { CalendarDatum, IsMobile, Record } from '../types/index';
import { Chart, Header } from '../components/BulletsChart';
import React, { FC } from 'react';
import styled, { css }from 'styled-components';

import { Calendar } from '@nivo/calendar';
import { useMediaQuery } from "react-responsive";

const Cont = styled.div`
  ${(props: IsMobile) => props.isMobile ?
  css`
    width: 95%;
  ` : css`
    width: 600px;
  `}
  height: 250px;
  border: 2px solid ${({ theme }) => theme.colors.darkseagreen};
  border-radius: 10px;
  margin: 5px;
  overflow: scroll hidden;
`;

const CalendarChart = (data: CalendarDatum[]): React.ReactElement => (
  <Calendar
    width={1000}
    height={240}
    data={data}
    from="2021-04-01"
    to="2021-07-25"
    emptyColor="#eeeeee"
    colors={[ 'rgba(151, 227, 213,0.5)', '#97e3d5', 'rgb(127, 195, 177)', 'rgb(37, 125, 127)' ]}
    minValue={1}
    maxValue={11}
    margin={{ top: -100, right: 10, bottom: -40, left: 30 }}
    yearSpacing={35}
    monthBorderColor="#ffffff"
    monthLegendOffset={4}
    // onClick={ (day: CalendarDayData)=> console.log(day)}
    dayBorderWidth={2}    
    dayBorderColor="#ffffff"
    legends={[{
      anchor: 'bottom-left',
      direction: 'row',
      translateY: 50,
      itemCount: 4,
      itemWidth: 30,
      itemHeight: 40,
      itemsSpacing: 20,
      // itemDirection: 'right-to-left'
    }]}
  />
);

type Props = {
  storeData: Record[];
}

const MonthlyChart: FC<Props> = ({ storeData }) => {
  const isMobile = useMediaQuery({query : "(max-width:500px)"});
  const parsedData: CalendarDatum[] = [];

  storeData.map((el) => {
    const parsingData = {
      // 데이터 날짜 임의 수정 불가 (당일만 가능한 코드)
      // day: el.key[1].length === 1 ? el.key[0] + '-0' + el.key[1] + '-' + el.key[2] :
      //   el.key[0] + '-' + el.key[1] + '-' + elconsole.key[2],
      day: el.month < 10 ? el.day < 10 ? el.year + '-0' + el.month + '-0' + el.day : el.year + '-0' + el.month + '-' + el.day :
        el.year + '-' + el.month + '-' + el.day,
      value: el.records,
    };
    parsedData.push(parsingData);
    return parsedData;
  });
  
  return (
    <Cont isMobile={isMobile}>
      <Header>YEAR DATA</Header>
      <Chart>{CalendarChart(parsedData)}</Chart>      
    </Cont>
    
  );
};

export default MonthlyChart;