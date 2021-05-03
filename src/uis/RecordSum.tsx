import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const MAX_RECORD = 10 * (new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate());

interface Length {
  length: number,
}

const Main = styled.div`
  width: 80%;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.darkseagreen};
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Gage = styled.div`
  position :relative;
  height: 50%;
  width: ${(props: Length) => props.length * 100 / MAX_RECORD + "%"};
  transition: width .5s ease;
  background-color: ${({ theme }) => theme.colors.darkseagreen};
  color: ${({ theme }) => theme.colors.darkgreen};
  font-weight: bold;
`;

const EndPoint = styled.div`
  position: absolute;
  right: 0;
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