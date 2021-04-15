import './App.css';

import { Counter } from './pages/Counter';
import Dashboard from './components/Dashboard'
import { InputInfo } from './pages/Input';
import React from 'react';

function App() {
  document.title = "RUNNER";
  return (
    <main>
      <Dashboard />
      <InputInfo />
    </main>
    
  );
}

export default App;
