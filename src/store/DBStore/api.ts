import { Record } from '../../types';
import axios from 'axios';

export const getUserData = async (userid: string): Promise<Record[]> => {
  const res = await axios.get('http://localhost:5000/api/getdata');
  return res.data;
    
};

export const pushUserData = async (data: Record): Promise<void> => {
  await axios.post('http://localhost:5000/api/inputdata', { ...data })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}