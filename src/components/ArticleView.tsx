import React, { FC } from 'react';

type Props = {
  name: string,
  age: number,
}

const ArticleView: FC<Props> = ({ name, age}: Props) => {
  return (
    <div>{name} {name ? ':' : ''} {age}</div>
  );
  
}
  
  


export default ArticleView;