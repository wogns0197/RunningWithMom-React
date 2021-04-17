import React, { useState } from 'react';

import Dashboard from '../components/Dashboard'
import { InputInfo } from '../components/Input';
import { Record } from '../types/index';

function MainDashBoard() {
  document.title = "RUNNER";
  const [recordList, setRecordList] = useState<Record[]>([]);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  if (isSubmit) {
    console.log(recordList);
    setIsSubmit(false);
  }

  
  return (
    <main>      
      <Dashboard recordList={recordList}/>
      <InputInfo
        recordList={recordList}
        setRecordList={setRecordList}
        setIsSubmit={setIsSubmit}
      />    
    </main>
    
  );
}

export default MainDashBoard;
