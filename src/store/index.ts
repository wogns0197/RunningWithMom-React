import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import DBStore from './DBStore';
import UserData from './userDataReducer';
import UserInfoReducer from './userInfoReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  UserData,
  UserInfoReducer,
  DBStore,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
export default store;