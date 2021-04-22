import React, { FC, useState } from 'react';
import styled, {css} from 'styled-components';

import { Strength } from '../types/index';
import theme from '../style/theme';

type Props = {
  setStrength: (el: Strength) => void,
}

const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  transition-duration: .4s;
`;

const Cont = styled.div`
  margin-top: 10px;
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  border: 3px solid ${({ theme }) => theme.colors.mediumseagreen};
  border-radius: 5px;
`;

const Easy = styled.div`
  ${Flex};
  width: 80px;
  height: 40px;
  color: ${({ theme }) => theme.colors.skyblue};  
`;

const Normal = styled.div`
  ${Flex};
  width: 80px;
  height: 40px;
  color: ${({ theme }) => theme.colors.darkseagreen};  
`;

const Hard = styled.div`
  ${Flex};
  width: 80px;
  height: 40px;
  color: ${({ theme }) => theme.colors.tomato};  
`;

export const SelectStrength: FC<Props> = ({setStrength}) => {
  const [selectedStrength, setSelectedStrength] = useState<Strength>(Strength.EASY);
  
  return (
    <Cont>
      <Easy
        onClick={() => {
          setSelectedStrength(Strength.EASY);
          setStrength(Strength.EASY);
        }}
        style={selectedStrength === 'EASY' ? { backgroundColor: theme.colors.pastelgreen_select } : {}}
      >EASY</Easy>
      <Normal
        onClick={() => {
          setSelectedStrength(Strength.NORMAL);
          setStrength(Strength.NORMAL);
        }}
        style={selectedStrength === 'NORMAL' ? { backgroundColor: theme.colors.pastelgreen_select } : {}}
      >NORMAL</Normal>
      <Hard
        onClick={() => {
          setSelectedStrength(Strength.HARD);
          setStrength(Strength.HARD);
        }}
        style={selectedStrength === 'HARD' ? { backgroundColor: theme.colors.pastelgreen_select } : {}}
      >HARD</Hard>
    </Cont>
  );
}