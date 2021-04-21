import React, { FC } from 'react';
import styled, {keyframes} from 'styled-components';

import { LiteralType } from 'typescript';
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

const barAnimation_w1 = keyframes`
  0% {
    width: 5px;
  }
  100% {
    width: 6px;
  }
`;
const barAnimation_w2 = keyframes`
  0% {
    width: 15px;
  }  
  100% {
    width: 20px;
  }
`;
const barAnimation_w3 = keyframes`
  0% {
    width: 30px;
  }
  50% {
    width: 31px;
  }
  100% {
    width: 32px;
  }
`;
/////////hmmmm............맘에 안드는 코드들...../////////////

const Bar1 = styled.div`  
  height: 5px;
  border-radius: 5px;  
  margin-top: 1px;  
  animation: ${barAnimation_w1} .7s infinite linear alternate;
`;
const Bar2 = styled.div`  
  height: 5px;
  border-radius: 5px;  
  margin-top: 1px;  
  animation: ${barAnimation_w2} .7s infinite linear alternate;
`;
const Bar3 = styled.div`  
  height: 5px;
  border-radius: 5px;  
  margin-top: 1px;  
  /* animation: ${barAnimation_w3} .7s infinite linear alternate; */
`;

type Props = {
  color: string
}

const StrengthUI: FC<Props> = ({ color }) => {
  
  return (
    <Cont>
      <Bar1 style={{ width: w1, backgroundColor: color}} />
      <Bar2 style={{ width: w2, backgroundColor: color}} />
      <Bar3 style={{ width: w3, backgroundColor: color}} />
      <Bar2 style={{ width: w2, backgroundColor: color}} />
      <Bar1 style={{ width: w1, backgroundColor: color}} />
    </Cont>    
  );
}

export default StrengthUI;