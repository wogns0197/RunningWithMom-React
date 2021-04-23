import React, { FC } from "react"

import { useMediaQuery } from "react-responsive"

const Mobile: FC = ({ children }) => {
  const ismobile = useMediaQuery({
    query : "(max-width:767px)"
  });
  return <React.Fragment>{ismobile && children}</React.Fragment>
}

const PC :FC = ({children}) => {
  const ispc = useMediaQuery({
    query : "(min-width:768px) "
  });
  return <React.Fragment>{ispc && children}</React.Fragment>
}

export {Mobile,PC};