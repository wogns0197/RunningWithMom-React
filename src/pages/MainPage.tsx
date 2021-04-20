import { GIF_RUNNING, ICON_BACK, ICON_FAVICON } from '../assets/Images';
import { Link, Route, RouteComponentProps, Switch }from 'react-router-dom'
import React, { useState } from 'react';

import { HamburgerMenu } from '../uis/HamburgerMenu';
import MainDashBoard from '../pages/MainDashBoard';
import MenuModal from '../uis/MenuModal';
import styled from 'styled-components';
import theme from '../style/theme';

const Main = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  width: 100vw;
  height: 60px;
  /* background-color: ${({ theme }) => theme.colors.white}; */
  background-color: ${({ theme }) => theme.colors.bisque};
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
  transition-duration: .3s;
  
  &:hover{
    transition-duration: .3s;
    background-color: ${({theme}) => theme.hexToRgba(theme.colors.darkgreen, 0.2)};
  }
`
const MainPage = ({ history }: RouteComponentProps): React.ReactElement => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  console.log(toggleMenu);
  return (
    <Main>
      <MenuModal istoggle={toggleMenu}/>
      <Header>
        <HeaderIcon src={ICON_FAVICON} />
        <div style={{
            fontSize: '30pt',
            cursor: 'pointer',
            }}>          
            R U N N E R
        </div>
        <HamburgerMenu
          barColor={theme.colors.forestgreen}
          setToggle={setToggleMenu}
          isToggled={toggleMenu}
        />
      </Header>
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
    </Main>    
  );
}

export default MainPage;