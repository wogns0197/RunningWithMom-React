import React, {useState} from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);  
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}> + </button>
      <button onClick={()=>setCount(count-1)}> - </button>
    </div>
  );
}