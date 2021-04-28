import React, { ReactElement } from 'react';

import Dashboard from '../components/Dashboard';
import { InputInfo } from '../components/Input';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainDashBoard = (): ReactElement => {
  return (
    <Main>
      <Dashboard />
      <InputInfo />
    </Main>
  );
};

export default MainDashBoard;
