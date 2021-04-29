import { Header, HeaderIcon } from '../pages/MainPage';
import React, { FC, useState } from 'react';
import styled, {css} from 'styled-components';

import { HamburgerMenu } from '../uis/HamburgerMenu';
import Login from '../components/Login';
import MenuModal from '../uis/MenuModal';
import { RootState } from '../store';
import theme from '../style/theme';
import { useSelector } from 'react-redux';

const FLEX = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  /* ${FLEX}; */
  width: 100%;
  height: 100vh;  
`;

const MyPage: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const loginData = useSelector((state: RootState) => state.userinfo);  

  return (
    <Main>
      {!loginData.id ? (<Login />) :
        (
          <>
            <MenuModal istoggle={toggleMenu}/>
            <Header>
              <HeaderIcon />
              <div style={{
                  fontSize: '30pt',
                  cursor: 'pointer',
                  }}>          
                  MY PAGE
              </div>
              <HamburgerMenu
                barColor={theme.colors.forestgreen}
                setToggle={setToggleMenu}
                isToggled={toggleMenu}
              />
            </Header>
          </>
        )
      }      
    </Main>
  );
}

export default MyPage;