import React, { FC } from "react";

import { useMediaQuery } from "react-responsive";

const Mobile: FC = ({ children }) => {
  const isMobile = useMediaQuery({
    query : "(max-width:500px)",
  });

  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const PC :FC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:501px) ",
  });

  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export {Mobile,PC};