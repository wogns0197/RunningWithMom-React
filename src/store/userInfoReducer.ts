import { UserInfo } from '../types';

type ReduxType =
  | ReturnType<typeof getUserInfo>
  | ReturnType<typeof logout>
  | ReturnType<typeof login>
;

const LOGIN = 'LOGIN' as const;
const LOGOUT = 'LOGOUT' as const;
const GET_INFO = 'GET_INFO' as const;

export const login = (data: UserInfo) => ({ type: LOGIN, data: data });
export const logout = () => ({ type: LOGOUT });
export const getUserInfo = () => ({ type: GET_INFO });

const UserInfoInitialState: UserInfo = {
  isLogin: false,
  id: '',
  pw: '',
  name: '',
  age: 0,
};

const UserInfoReducer = (
  state: UserInfo = UserInfoInitialState,
  action: ReduxType
  ) => {
  switch (action.type) {
    case (LOGIN):
      return action.data;
    case (GET_INFO):
      return state;
    case (LOGOUT):
      return UserInfoInitialState;
    default:
      return state;
  }
};

export default UserInfoReducer;

