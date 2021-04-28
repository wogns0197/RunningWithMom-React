import { IsMobile, TFN, UserInfo } from '../types/index';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import axios from 'axios';
import { login } from '../store/userInfoReducer';
import theme from '../style/theme';
import { tmpdir } from 'node:os';
import { useMediaQuery } from "react-responsive";

interface isPwValid {
  isValid: TFN,
};

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

const Cont = styled.div`  
  width: ${(props: IsMobile) => props.isMobile ? '80%' : '600px'};
  height: 350px;
  border: 3px solid ${({ theme }) => theme.colors.bisque};
  border-radius: 10px;
  ${FLEX};
  justify-content: flex-start;
  flex-direction: column;
`;

const InputCont = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 150px; 
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
  border: 3px solid ${({ theme }) => theme.colors.bisque};
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

const InputValid = styled.div`
  width: 15px;
  height: 13px;
  background-color: ${(props: isPwValid) => props.isValid === TFN.TRUE ?
    theme.colors.skyblue : ( props.isValid === TFN.NA ? theme.colors.white : theme.colors.tomato)};
  /* background-color: ${({ theme }) => theme.colors.skyblue}; */
  border-radius: 100px;
  margin-left: 5px;
`

const StyledInput = styled.input`
  border: none;
  width: 80%;
  height: 100%;
  text-align: center;  
  font-size: 13pt;  
  color : ${({ theme }) => theme.colors.darkgreen};
  &:focus {
    outline:none;
  };
`

// title 왼쪽으로 치우쳐있음 
const Header = styled.div`
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

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 30px;  
  background-color: ${({ theme }) => theme.colors.pastelgreen};
  border: 2px solid ${({ theme }) => theme.colors.mediumseagreen};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.darkgreen};
  font-size: 12pt;
  cursor: pointer;
`;

const Invalid = styled.div`
  color: ${({ theme }) => theme.colors.tomato};
`;

const GotoSignin = styled.p`
  color: ${({ theme }) => theme.colors.tomato};
  opacity: 0.5;
  font-size: 12pt;
  text-decoration: underline;
  cursor: pointer;
`

const postSignin = async (data: UserInfo) => {
  await axios.post('http://192.168.1.101:5000/api/signin', {...data})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
};



const MyPage: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width:767px)", });
  const [ [id, setID], [pw, setPW], [signID, setSignID], [signPW, setSignPW], [signPW2, setSignPW2] ] =
    [useState<string>(''), useState<string>(''), useState<string>(''), useState<string>(''), useState<string>('')];
  const [[name, setName], [age, setAge]] = [ useState<string>(''), useState<number>(0) ];
  const [isSignin, setIsSignin] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [pwValid, setPwValid] = useState<TFN>(TFN.NA);
  
  const dispatch = useDispatch();
  // const loginData = useSelector((state: RootState) => state.UserInfoReducer);
  // console.log(loginData);
  
  const postLogin = async (id: string, pw: string) => {
    
    await axios.post('http://192.168.1.101:5000/api/getLogin', { id: id, pw: pw })
      .then(async res => {        
        return (res.data.length >= 1) && (res.data[0].pw === pw) ? 
        accessLogin({ isLogin:true, id: id, pw: pw, name, age }) : setIsValid(true);
      })
      .catch(err => {
        console.log(err);
      })
    
  };

  const accessLogin = (data: UserInfo) => {    
    dispatch(login({...data}));
  };

  return (
    !isSignin ?
    <Main>
      <Cont isMobile={isMobile}>
        <Header>LOGIN</Header>
        <InputCont>
          <Column isMobile={isMobile}>
            <InputName>ID</InputName>
            <StyledInput
              type='text'
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
          </Column>
          <Column isMobile={isMobile}>
            <InputName>PW</InputName>
            <StyledInput
              type='password'
              value={pw}
              onChange={(e) => setPW(e.target.value)}
            />
          </Column>
        </InputCont>
        {isValid && (<Invalid>등록되지 않은 ID이거나 잘못된 PW입니다.</Invalid>)}
        <Button
            onClick={async () => {              
              postLogin(id, pw);
            }}>
          LOGIN
        </Button>
        <GotoSignin onClick={() => setIsSignin(!isSignin)}>sign in</GotoSignin>
      </Cont>
    </Main> :
    <Main>
      <Cont isMobile={isMobile} style={{height:'450px', marginTop:'50px'}}>
        <Header>SIGN IN</Header>
        <InputCont style={{ height: "300px" }}>          
          <Column isMobile={isMobile}>
            <StyledInput
              type='text'
              style={{width: '100%'}}
              placeholder="이름"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Column>
          <Column isMobile={isMobile}>
            <StyledInput
              type='number'
              style={{width: '100%'}}
              placeholder="나이"
              value={age || undefined}
              onChange={e => setAge(parseInt(e.target.value))}
            />
          </Column>                        
          <Column isMobile={isMobile}>
            <StyledInput
              type='text'
              style={{width: '100%'}}
              placeholder="아이디"
              value={signID}
              onChange={e => setSignID(e.target.value)}
            />
          </Column>
          <Column isMobile={isMobile}>
            <InputValid isValid={pwValid}/>
            <StyledInput
              type='password'
              style={{ width: '100%' }}
              placeholder="비밀번호"
              value={signPW}
              onChange={e => setSignPW(e.target.value)}
            />
          </Column>
          <Column isMobile={isMobile}>
            <InputValid isValid={pwValid}/>
            <StyledInput
              type='password'
              style={{ width: '100%' }}
              placeholder="비밀번호 재입력"
              value={signPW2}
              onChange={e => {
                setSignPW2(e.target.value);                
              }}
              onBlur={() => {
                signPW === signPW2 ? setPwValid(TFN.TRUE) : setPwValid(TFN.FALSE);
              }}
            />
          </Column>
        </InputCont>
        <Button
          style={{ margin: "0" }}
          onClick={() => {            
            postSignin({ id: signID, pw: signPW, name: name, age: age });
          }}  
        >
          SIGN IN
        </Button>
        <GotoSignin onClick={() => setIsSignin(!isSignin)}>login</GotoSignin>
      </Cont>
    </Main>
  );
}

export default MyPage;