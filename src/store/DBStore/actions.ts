import { AxiosError } from 'axios';
import { Record } from '../../types';
import { createAction } from 'typesafe-actions';

export const GET_USERDATA = 'GET_USERDATA' as const;
export const GET_USERDATA_SUCCESS = 'GET_USERDATA_SUCCESS' as const;
export const GET_USERDATA_FAIL = 'GET_USERDATA_FAIL' as const;

// export const getUserDataAsync = createAsyncAction(
//   GET_USERDATA,
//   GET_USERDATA_SUCCESS,
//   GET_USERDATA_FAIL
// )<undefined, Record[], AxiosError>();
export const action_getUserData = createAction(GET_USERDATA)();
export const action_getUserDataSuccess = createAction(GET_USERDATA_SUCCESS)<Record[]>();
export const action_getUserDataFail = createAction(GET_USERDATA_FAIL)<AxiosError>();