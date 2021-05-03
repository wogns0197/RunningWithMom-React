import React, { FC, useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { HamburgerMenu } from '../uis/HamburgerMenu';
import { Header } from '../pages/MainPage';
import MenuModal from '../uis/MenuModal';
import MonthRecord from '../components/MonthRecord';
import { RootState } from '../store';
import { getUserDataThunk } from '../store/DBStore';
import theme from '../style/theme';
import { useHistory }from 'react-router-dom';

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
  const storeData = useSelector((state: RootState) => state.DBStore.userData).data || [];
  const loginData = useSelector((state: RootState) => state.userinfo);
  const history = useHistory();
  const dispatch = useDispatch();
  !loginData.id && history.push('Login');
  
  useEffect(() => {
    dispatch(getUserDataThunk(loginData.id));
  }, [dispatch, loginData.id]);  
  
  console.log(storeData);
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
      <MonthRecord storeData={storeData}/>
    </Main>
  );
}

export default MyPage;