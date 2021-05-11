import React, { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

import theme from '../style/theme';

const MAX_RECORD = 10 * (new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate());

interface Length {
  length: number,
}

const Main = styled.div`
  margin: 20px 0 20px 0;
  width: 80%;
  min-height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.darkseagreen};
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const GradientColor = keyframes`
  0% {
    background-color: ${theme.colors.mediumseagreen};    
  }
  50% {
    background-color: ${theme.colors.darkseagreen};    
  }
  100% {
    background-color: ${theme.colors.mediumseagreen};    
  }
`

const Gage = styled.div`  
  position :relative;
  height: 50%;
  width: ${(props: Length) => props.length * 100 / MAX_RECORD + "%"};
  transition: width .5s ease;
  /* background-color: ${({ theme }) => theme.colors.darkseagreen}; */
  color: ${({ theme }) => theme.colors.darkgreen};
  font-weight: bold;
  animation: ${GradientColor} 5s infinite ease-in-out;
`;



const EndPoint = styled.div`
  position: absolute;
  right: -20px;
  bottom: -20px;
  display: flex;  
`;

type Props = {
  recordsum: number,
};

const RecordSum: FC<Props> = ({ recordsum }) => {
  
  return (
    <Main>      
      <Gage length={recordsum}>
        <EndPoint>{recordsum}
          <div style={{
            marginTop: '5px',
            fontWeight: 300,
            fontSize: '8pt',            
          }}>km</div>
        </EndPoint>
      </Gage>
    </Main>
  );
}

export default RecordSum;