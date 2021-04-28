import axios from 'axios';

// export const getDatum = () => async dispatch => {
//   dispatch({ type: GET_USERDATA });
//   try {
//     const res = await axios.get('http://localhost:5000/api/getdata')

//     dispatch({ type: GET_USERDATA_SUCCESS, res.data });
//   } catch (e) {
    
//   }
// }


export const getUserData = async (userID: string) => {
  await axios.get('http://localhost:5000/api/getdata')
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    })
};