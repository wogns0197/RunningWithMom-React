import { Record } from '../../types';
import axios from 'axios';

export const getUserData = async (userid: string): Promise<Record[]> => {
  // const res = await axios.post('http://35.221.122.58:5000/api/getdata', { userid });  
  const res = await axios.post('http://localhost:5000/api/getdata', { userid });  
  return res.data;
};

export const pushUserData = async (data: Record): Promise<void> => {
  // await axios.post('http://35.221.122.58:5000/api/inputdata', { ...data })
  await axios.post('http://localhost:5000/api/inputdata', { ...data })
    .then(res => {
      // console.log(res);      
    })
    .catch(err => console.log(err));
}

export const removeUserData = async (data: Record): Promise<void> => {
  // await axios.post('http://35.221.122.58:5000/api/removedata', { ...data });  
  await axios.post('http://localhost:5000/api/removedata', { ...data });  
}

export const isExistedData = async (userid: string, month: number, day: number): Promise<boolean> => {
  const res = await axios.post('http://localhost:5000/api/getdata', { userid });  
  return await (res.data.map((el: Record) => {
    return (el.month === month) && (el.day === day) ? true : false;
  })).includes(true);
}