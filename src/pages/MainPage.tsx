import { BrowserRouter, Link, Route, Switch }from 'react-router-dom'
import { GIF_RUNNING, ICON_FAVICON, ICON_MENU } from '../assets/Images';

import MainDashBoard from '../pages/MainDashBoard';
import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  width: 100vw;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  color : ${({ theme }) => theme.colors.pastelgreen};
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderIcon = styled.img`
  width: 50px;
  margin: 0 10px 0 10px;
  cursor: pointer;
`;

const RunningGIF = styled.img`
  width: 500px;
`;

const MainCont = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
`;

const RouteButton = styled.button`
  border: 3px solid ${({ theme }) => theme.colors.mediumseagreen};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.green};
  font-size: 15pt;
  font-weight: bold;
  width: 100px;
  height: 40px;
  margin: 10px;

  &:hover{
    background-color: ${({theme}) => theme.hexToRgba(theme.colors.white, 0.4)};
  }
`;

const MainView = (): React.ReactElement => {
  return (
    <MainCont>
      <RunningGIF src={GIF_RUNNING} />
      <div style={{display:'flex'}}>
        <Link to='/Dashboard'>
            <RouteButton>기록하기</RouteButton>
        </Link>
        <Link to='/Dashboard'>
            <RouteButton>기록보기</RouteButton>
        </Link>
      </div>      
    </MainCont>
  );
}

const MainPage = (): React.ReactElement => {
  return (
    <Main>
      <Header>
        <HeaderIcon src={ICON_FAVICON} />
        <div
          // onClick={ }
          style={{
            fontSize: '30pt',
            cursor: 'pointer',
        }}>R U N N E R</div>
        <HeaderIcon src={ICON_MENU} style={{width:'30px', height:'30px', filter:'inver(100%)'}}/>
      </Header>
      
      <BrowserRouter>        
        <Switch>
          <Route path='/' exact component={MainView} />
          <Route path='/Dashboard' exact component={MainDashBoard} />
        </Switch>
      </BrowserRouter>
      
    </Main>    
  );
}

export default MainPage;