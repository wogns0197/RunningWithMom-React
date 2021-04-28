import { action_getUserData, action_getUserDataFail, action_getUserDataSuccess } from './actions';

import { RootState } from '../Store';
import { ThunkAction } from 'redux-thunk';
import { getDataAction } from './types';
import { getUserData } from './api';

export const getUserDataThunk = (userid: string): ThunkAction<void, RootState, null, getDataAction> => {
  return async dispatch => {
    dispatch(action_getUserData());
    try {
      const userData = await getUserData(userid);
      dispatch(action_getUserDataSuccess(userData));
    } catch (err) {
      dispatch(action_getUserDataFail(err));
    }
  };
};
