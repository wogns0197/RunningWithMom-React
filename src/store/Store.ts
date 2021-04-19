import { combineReducers, createStore } from 'redux';

import { Record } from '../types/index';

type ReduxType = 
  | ReturnType<typeof inputData>
  | ReturnType<typeof getData>
  | ReturnType<typeof editData>
  | ReturnType<typeof removeData>
;

type ActionFunc = (data?: Record, idx?: number) => ({ type: string, data?: Record });

const INPUT_DATA = 'INPUT_DATA';
const GET_DATA = 'GET_DATA';
const EDIT_DATA = 'EDIT_DATA';
const REMOVE_DATA = 'REMOVE_DATA' // not usual

export const inputData: ActionFunc = (data) => ({ type: INPUT_DATA , data });
export const getData: ActionFunc = () => ({ type: GET_DATA });
const editData: ActionFunc = () => ({ type: EDIT_DATA });
const removeData: ActionFunc = () => ({ type: REMOVE_DATA });

type dataState = {
  data: Record[]
}
const initialState: dataState = {
  data: [],
};

const reducer = (
  state: dataState = initialState,
  action: ReduxType) => {
  switch (action.type) {
    case (INPUT_DATA):
      return [...state.data, action.data];
    case (GET_DATA):
      return state;
    case (EDIT_DATA):
      return state;
    case (REMOVE_DATA):
      return state;
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  reducer,
});
const store = createStore(rootReducer);

export default store;