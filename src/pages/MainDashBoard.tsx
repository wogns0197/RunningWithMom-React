import React, { useState } from 'react';

import Dashboard from '../components/Dashboard'
import { InputInfo } from '../components/Input';
import { Record } from '../types/index';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
`;

function MainDashBoard() {
  document.title = "RUNNER";
  const recordList: Record[] =[];
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  if (isSubmit) {
    console.log(recordList);
    setIsSubmit(false);
  }
  
  return (
    <Main>
      <Dashboard />
      <InputInfo
        recordList={recordList}
        setIsSubmit={setIsSubmit}
      />    
    </Main>
    
  );
}

export default MainDashBoard;
