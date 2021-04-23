import React, {FC} from 'react';

import styled from 'styled-components';

const Hamburger = styled.div`
  width:35px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  z-index: 999;
  transition-duration: .2s;
  &:hover {
    transition-duration: .2s;
    transform: scale(1.05);
  }
`;

const Menubar = styled.div`
  width: 35px;
  height: 5px;
  margin: 4px 10px 2px 0;
  border-radius: 2px;
`;

const Exitbar = styled.div`
  width: 35px;
  height: 3px;
  transform: rotate(45deg);
  position: absolute;
  margin-right: 10px;
`;



type Props = {
  barColor: string,
  setToggle: (el: boolean) => void,
  isToggled: boolean,
}

export const HamburgerMenu: FC<Props> = ({ barColor, setToggle, isToggled }) => {
  
  return (
    <Hamburger onClick={() => setToggle(!isToggled)}>
      {!isToggled ?
        (
          <>
            <Menubar style={{backgroundColor:barColor, width:'20px'}}/>
            <Menubar style={{backgroundColor:barColor}}/>
            <Menubar style={{ backgroundColor: barColor }} />
          </>
        ):
        (
          <>
            <Exitbar style={{ backgroundColor: barColor }} />
            <Exitbar style={{ backgroundColor: barColor, transform: 'rotate(-45deg)' }} />
          </>
        )
      }
        
    
    </Hamburger>
  );
};