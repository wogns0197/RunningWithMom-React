import React, { FC } from 'react';

import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components';

const MenuTab = styled.div`
  /* visibility: hidden; */
  position: absolute;
  height: 100vh;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.bisque};
  transition-duration: .4s;
`;

type Props = {
  istoggle : boolean
}

const MenuModal: FC<Props> = ({istoggle}) => {
  return (
    <MenuTab style={{
      // visibility: istoggle ? 'visible' : 'hidden',
      right: istoggle ? '0' :'-200px'
    }} />
  );
}

export default MenuModal;