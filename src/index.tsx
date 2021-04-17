import './index.css';

import { BrowserRouter, Route, Switch }from 'react-router-dom'

import MainDashBoard from './pages/MainDashBoard';
import MainPage from './pages/MainPage';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import reportWebVitals from './reportWebVitals';
import theme from './style/theme';

document.title = "RUNNER";
ReactDOM.render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>        
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/Dashboard' exact component={MainDashBoard} />
      </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
