import './App.css';

import React, { useEffect, useState } from 'react';
import {Record, Strength, Weather} from './types/index';

import Dashboard from './components/Dashboard'
import { InputInfo } from './components/Input';

function App() {
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

export default App;
