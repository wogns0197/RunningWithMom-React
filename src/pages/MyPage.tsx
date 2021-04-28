import React, { FC } from 'react';
import styled, {css} from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Login from '../components/Login';
import { RootState } from '../store';
import { logout } from '../store/userInfoReducer';

const FLEX = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  /* ${FLEX}; */
  width: 100%;
  height: 100vh;  
`;


const MyPage: FC = () => {
  const loginData = useSelector((state: RootState) => state.userinfo);
  const dispatch = useDispatch();

  return (
    <Main>
      {!loginData.id ? (<Login />) :
        (
          <>
            <button onClick={() => dispatch(logout())} />
            {loginData.id}
          </>
        )
      }      
    </Main>
  );
}

export default MyPage;