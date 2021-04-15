import React, { FC, useState } from 'react';

import ArticleView from '../components/ArticleView';

export const InputInfo = () => {
  // const [toady, setToday] = useState<Date>('');
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const day = today.getDate();
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  return (
    <>
    <ArticleView name={name} age={age}/>
    <div style={{
      marginTop: 60,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      }}>
        {year}년 {month}월 {day}일
      <form action="">
        <input
          type='text'
          name='name'
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}          
        />
        <input
          type='number'
          name='age'
          placeholder="age"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </form>
      <button className="but_summit" onClick={() => console.log({ name } , {age})} />
    </div>
    </>
  );
  
}
