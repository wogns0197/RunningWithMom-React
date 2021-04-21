import React, { FC } from 'react';

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

const [w1, w2, w3] = ['5px', '15px', '30px'];
const Bar = styled.div`  
  height: 5px;
  border-radius: 5px;  
  margin-top: 1px;  
`;

type Props = {
  color: string
}

const StrengthUI: FC<Props> = ({ color }) => {
  
  return (
    <Cont>      
      <Bar style={{ width: w1, backgroundColor: color}} />
      <Bar style={{ width: w2, backgroundColor: color}} />
      <Bar style={{ width: w3, backgroundColor: color}} />
      <Bar style={{ width: w2, backgroundColor: color}} />
      <Bar style={{ width: w1, backgroundColor: color}} />
    </Cont>    
  );
}

export default StrengthUI;