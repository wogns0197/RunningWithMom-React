import React, { FC, useState } from 'react';
import styled, {css} from 'styled-components';

import { HamburgerMenu } from '../uis/HamburgerMenu';
import { Header } from '../pages/MainPage';
import Login from '../components/Login';
import MenuModal from '../uis/MenuModal';
import { RootState } from '../store';
import theme from '../style/theme';
import { useHistory }from 'react-router-dom';
import { useSelector } from 'react-redux';

const FLEX = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;  
  /* ${FLEX}; */  
`;

const UserID = styled.div`  
  letter-spacing: 1px;
  text-shadow: none;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.darkgreen};
  background-color: ${({ theme }) => theme.colors.mediumseagreen};
  border: 2px solid ${({ theme }) => theme.colors.darkgreen};
  border-radius: 20px;
  right: 5px;
  top: 10px;    
  padding: 2px 12px 2px 12px;
`

const MyPage: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const loginData = useSelector((state: RootState) => state.userinfo);
  const history = useHistory();
  !loginData.id && history.push('Login');
  return (
    <Main>
      <MenuModal istoggle={toggleMenu}/>
      <Header>
        <UserID>{loginData.id}</UserID>
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
    </Main>
  );
}

export default MyPage;