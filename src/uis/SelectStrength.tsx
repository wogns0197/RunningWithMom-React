import React, { FC } from 'react';
import styled, {css} from 'styled-components';

import { Strength } from '../types/index';

type Props = {
  setStrength: (el: Strength) => void,
}

const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold
`;

const Cont = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-around;
  border: 3px solid ${({ theme }) => theme.colors.bisque};
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
  color: ${({theme}) => theme.colors.tomato};
`;

export const SelectStrength: FC<Props> = () => {
  return (
    <Cont>
      <Easy>EASY</Easy>
      <Normal>NORMAL</Normal>
      <Hard>HARD</Hard>
    </Cont>
  );
}