import React, { FC } from 'react';

import { Link }from 'react-router-dom';
import styled from 'styled-components';

const MenuTab = styled.div`  
  position: absolute;
  height: 100vh;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.bisque};
  transition-duration: .4s;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Menu = styled.div`
  margin: 20px;
  color: ${({ theme }) => theme.colors.forestgreen};
  cursor: pointer;
  font-weight: bold;
`;

type Props = {
  istoggle : boolean
}

const MenuModal: FC<Props> = ({istoggle}) => {
  return (
    <MenuTab style={{
      // display: istoggle ? 'inline' : 'none',
      right: istoggle ? '0' :'-200px',
    }}>
      <Link style={{ textDecoration: 'none' }} to="/MyPage">
        <Menu style={{ marginTop: '100px' }}>MY PAGE</Menu>
      </Link>
      <Link style={{textDecoration:'none'}} to="/Dashboard">
        <Menu>RECORD</Menu>
      </Link>
      <Link style={{textDecoration:'none'}} to="/MainChart">
        <Menu>VIEW</Menu>
      </Link>
      <Menu>INFORMAION</Menu>
    </MenuTab>
  );
};

export default MenuModal;