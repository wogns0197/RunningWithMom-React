import { IsMobile, Record } from '../types/index';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import axios from 'axios';
import { useMediaQuery } from "react-responsive";

const FLEX = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  ${FLEX};
  width: 100%;
  height: 500px;  
`;

const But = styled.button`
  width: 100px;
  height: 50px;
`;

const Cont = styled.div`  
  width: ${(props: IsMobile) => props.isMobile ? '80%' : '600px'};
  height: 400px;
  border: 3px solid ${({ theme }) => theme.colors.bisque};
  border-radius: 10px;
`;

const InputCont = styled.div`
  width: 100%;
  height: 300px; 
  ${FLEX};
  flex-direction: column;
`

const Column = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  margin-bottom: 20px;
  width: ${(props: IsMobile) => props.isMobile ? '60%' : '40%'};
  height: 30px;
  border: 2px solid ${({ theme }) => theme.colors.bisque};
  border-radius: 10px;
  overflow: hidden;
`;

const InputName = styled.div`
  color : ${({ theme }) => theme.colors.darkgreen};
  background-color: ${({ theme }) => theme.colors.bisque};
  width: 20%;
  height: 100%;
  font-size: 13pt;
  ${FLEX};
`;

const StyledInput = styled.input`
  border: none;
  width: 80%;
  height: 100%;
  text-align: center;  
  font-size: 13pt;  
  color : ${({ theme }) => theme.colors.darkgreen};
  &:focus {
    outline:none;
  }
`

const Header = styled.div` // title 왼쪽으로 치우쳐있음
  ${FLEX};
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.bisque};
  color : ${({ theme }) => theme.colors.pastelgreen};
  text-shadow: -1px 0 ${({ theme }) => theme.colors.darkseagreen},
    0 1px ${({ theme }) => theme.colors.darkseagreen},
    1px 0 ${({ theme }) => theme.colors.darkseagreen},
    0 -1px ${({ theme }) => theme.colors.darkseagreen};
  font-size: 25pt;
  font-weight: bold;
  letter-spacing: 10px;  
`;

const getdata = async () => {
  await axios.get('http://localhost:5000/api/getdata')
    .then(res => {
      console.log(res.data);
      return res;
    })
    .catch(err => {
      console.log(err);
    })
}

const MyPage: FC = () => {
  const isMobile = useMediaQuery({query : "(max-width:767px)",});  
  return (
    <Main>
      {/* <But onClick={ async() => {        
        console.log(await getdata());
      }}/> */}
      <Cont isMobile={isMobile}>
        <Header>LOGIN</Header>
        <InputCont>
          <Column isMobile={isMobile}>
            <InputName>ID</InputName>
            <StyledInput type='text'></StyledInput>
          </Column>
          <Column isMobile={isMobile}>
            <InputName>PW</InputName>
            <StyledInput type='password'></StyledInput>
          </Column>
        </InputCont>
      </Cont>
    </Main>
  );
}

export default MyPage;