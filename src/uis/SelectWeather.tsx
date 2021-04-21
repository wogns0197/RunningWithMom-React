import React, { FC, useState } from 'react';

import { ICON_WEATHER } from '../assets/Images';
import { Weather } from '../types/index';
import styled from 'styled-components'
import theme from '../style/theme';

type Props = {  
  setWeather: (el: Weather)=>void,
}

const Cont = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-evenly;
  border: 3px solid ${({ theme }) => theme.colors.bisque};
  border-radius: 5px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition-duration: .4s;
`;

function getKeyByValue(object: any, value: string) {
  return Object.keys(object).find(key => object[key] === value);
}

const SelectWeather: FC<Props> = ({ setWeather }) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  
  return (
    <Cont>
      {Object.values(ICON_WEATHER).map((el, idx) =>
        idx === selectedIdx ?
          <Img src={el}
            onClick={() => {
              setSelectedIdx(idx);
              // setWeather(ICON_WEATHER[el]);
            }}
            style={{ backgroundColor: theme.colors.bisque }}
          />
          :
          <Img src={el}
            onClick={() => setSelectedIdx(idx)}
          />
      )}      
    </Cont>
    
  );
}

export default SelectWeather;