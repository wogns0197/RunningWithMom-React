import { Record } from '../types';
import { RootState } from './Store';
import { ThunkAction } from 'redux-thunk';
import { getDataAction } from './types';
import { getUserData } from './api';
import { action_getUserData, action_getUserDataSuccess, action_getUserDataFail} from './actions';

export const getUserDataThunk = (userid: string): ThunkAction<void, RootState, null, getDataAction> => {
  return async dispatch => {
    dispatch(action_getUserData());
    try {
      const userData = await
    } catch (err) {
      
    } 
  }
}
