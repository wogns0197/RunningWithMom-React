import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import DBStore from './DBStore';
import UserData from './userDataReducer';
import UserInfoReducer from './userInfoReducer';
import storage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  UserData,
  UserInfoReducer,
  DBStore,
});

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export default store;