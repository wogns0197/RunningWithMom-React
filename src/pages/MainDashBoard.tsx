import React, { ReactElement } from 'react';

import Dashboard from '../components/Dashboard';
import { InputInfo } from '../components/Input';
import { RootState } from '../store';
import styled from 'styled-components';
import { useHistory }from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainDashBoard = (): ReactElement => {
  const loginData = useSelector((state: RootState) => state.userinfo);
  const history = useHistory();

  !loginData.id && history.push('MyPage');
  return (  
    <Main>
      <Dashboard />
      <InputInfo />
    </Main>
  );
};

export default MainDashBoard;
