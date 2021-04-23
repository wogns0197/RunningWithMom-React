import React, { FC } from 'react';

import { Calendar } from '@nivo/calendar'
import { CalendarDatum } from '../types/index';
import { Record } from '../types/index';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";

const Cont = styled.div`
  width: 600px;
  height: 300px;
  border: 2px solid ${({ theme }) => theme.colors.darkseagreen};
  border-radius: 10px;
  margin: 5px;
  overflow-x: scroll;
`;

const CalendarChart = (data: CalendarDatum[] ) => (
  <Calendar
    width={1000}
    height={300}
    data={data}
    from="2021-04-01"
    to="2021-07-25"
    emptyColor="#eeeeee"
    colors={[ 'rgba(151, 227, 213,0.5)', '#97e3d5', 'rgb(127, 195, 177)', 'rgb(37, 125, 127)' ]}
    minValue={1}
    maxValue={11}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={35}
    monthBorderColor="#ffffff"
    monthLegendOffset={4}
    // onClick={ (day: CalendarDayData)=> console.log(day)}
    dayBorderWidth={2}    
    dayBorderColor="#ffffff"
    legends={[
        {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left'
        }
    ]}
  />
)

type Props = {
  storeData: Record[];
}

const MonthlyChart: FC<Props> = ({ storeData }) => {
  const isMobile = useMediaQuery({query : "(max-width:500px)"}) || undefined;
  const parsedData: CalendarDatum[] = [];

  storeData.map(el => {    
    const parsingData = {
      day: el.key[1].length === 1 ? el.key[0] + '-0' + el.key[1] + '-' + el.key[2] :
        el.key[0] + '-' + el.key[1] + '-' + el.key[2],
      value: el.records,
    }
    parsedData.push(parsingData);
    return parsedData;
  });
  
  return (
    <Cont style={isMobile && {width:'100%'}}>
      {CalendarChart(parsedData)}
    </Cont>
    
  );
}

export default MonthlyChart;