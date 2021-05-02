import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store, { persistor } from './store';

import Login from './components/Login';
import MainChart from './pages/MainChart';
import MainDashBoard from './pages/MainDashBoard';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import reportWebVitals from './reportWebVitals';
import theme from './style/theme';

document.title = "RUNNER";

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>        
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/Dashboard" component={MainDashBoard} />
            <Route path="/MainChart" component={MainChart} />
            <Route path="/MyPage" component={MyPage} />
            <Route path="/Login" component={Login} />
          </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
