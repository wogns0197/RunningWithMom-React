import { BrowserRouter, Link, Route, Switch }from 'react-router-dom'
import { GIF_RUNNING, IMG_FAVICON } from '../assets/Images';

import MainDashBoard from '../pages/MainDashBoard';
import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
`;

const Header = styled.div`
  width: 100vw;
  height: 50px;
  background-color: ${({theme}) => theme.colors.pastelgreen};
`;

const Favicon = styled.img`
  display: flex;
  width: 50px;
`;

const RunningGIF = styled.img`
  width: 500px;
`;
const MainPage = () => {
  return (
    <Main>
      <Header>
        <Favicon src={IMG_FAVICON} /> 
      </Header>
      <RunningGIF src={GIF_RUNNING}/>
      <BrowserRouter>
        <Link to='/Dashboard'>
          <button />
        </Link>
        <Switch>
          {/* <R */}
          <Route path='/Dashboard' exact component={MainDashBoard} />
        </Switch>
      </BrowserRouter>
      
    </Main>    
  );
}

export default MainPage;