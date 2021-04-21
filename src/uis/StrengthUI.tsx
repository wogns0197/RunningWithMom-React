import React, { FC } from 'react';

import { LiteralType } from 'typescript';
import styled from 'styled-components';
import theme from '../style/theme';

const Cont = styled.div`
  margin-top: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-content: flex-end;
  align-items: center;
`;

const Bar = styled.div`
  width: 30px;
  height: 5px;
  border-radius: 5px;
  /* background-color: ${({theme}) => theme.colors.darkseagreen}; */
  margin-top: 1px;
`;

type Props = {
  color: string
}

const StrengthUI: FC<Props> = ({ color }) => {
  console.log(color , typeof color, typeof 'tomato');
  return (
    <Cont>
      <Bar style={{width:'5px', backgroundColor: color}} />
      <Bar style={{width:'15px', backgroundColor: color}} />
      <Bar style={{width:'30px', backgroundColor: color}} />
      <Bar style={{width:'15px', backgroundColor: color}} />
      <Bar style={{width:'5px', backgroundColor: color}} />
    </Cont>    
  );
}

export default StrengthUI;