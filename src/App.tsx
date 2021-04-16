import './App.css';

import React, { useState } from 'react';

import Dashboard from './components/Dashboard'
import { InputInfo } from './components/Input';
import { Record } from './types/index';
import { ThemeProvider } from "styled-components";
import theme from './style/theme';

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
      <ThemeProvider theme={theme}>
        <Dashboard recordList={recordList}/>
        <InputInfo
          recordList={recordList}
          setRecordList={setRecordList}
          setIsSubmit={setIsSubmit}
        />
      </ThemeProvider>      
    </main>
    
  );
}

export default App;
