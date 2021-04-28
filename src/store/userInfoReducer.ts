import { UserInfo } from '../types';

type ReduxType =
  | ReturnType<typeof getUserInfo>
  | ReturnType<typeof logout>
;


const GET_INFO = 'GET_INFO' as const; // as const for not being 'string', also real value
const LOGOUT = 'LOGOUT' as const

export const getUserInfo = () => ({ type: GET_INFO });
export const logout = () => ({ type: LOGOUT });

const UserInfoInitialState: UserInfo = {
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
    case (GET_INFO):
      return state;
    case (LOGOUT):
      return UserInfoInitialState;
    default:
      return state;
  }
};

export default UserInfoReducer;

