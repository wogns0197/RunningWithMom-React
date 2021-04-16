import './App.css';

import React, {createContext} from 'react';
import {Record, Strength, Weather} from './types/index';

import Dashboard from './components/Dashboard'
import { InputInfo } from './components/Input';

const obj: Record[] = [];
export const RecordContext = createContext(
  obj,
);

function App() {
  document.title = "RUNNER";
  return (
    <main>
      <RecordContext.Provider value={obj}>
        <Dashboard />
        <InputInfo />
      </RecordContext.Provider>      
    </main>
    
  );
}

export default App;
