import { Strength, Weather } from '../types/index';
import { combineReducers, createStore } from 'redux';

import { Record } from '../types/index';

type ReduxType = 
  | ReturnType<typeof inputData>
  | ReturnType<typeof getData>
  | ReturnType<typeof editData>
  | ReturnType<typeof removeData>
;

type ActionFunc = (data: Record, idx?: number) => ({ type: string, data: Record });

const INPUT_DATA = 'INPUT_DATA';
const GET_DATA = 'GET_DATA';
const EDIT_DATA = 'EDIT_DATA';
const REMOVE_DATA = 'REMOVE_DATA' // not usual

export const inputData: ActionFunc = (data) => ({ type: INPUT_DATA , data });
export const getData: ActionFunc = (data) => ({ type: GET_DATA, data});
const editData: ActionFunc = (data) => ({ type: EDIT_DATA, data });
const removeData: ActionFunc = (data) => ({ type: REMOVE_DATA, data});

// export type DataState = {
//   data: Record[]
// };

const initialState: Record[] = [
  {
    key: 1,
    year: 2021,
    month: 4,
    day: 19,
    goal: 100,
    records: 80,
    weather: Weather.CLOUD,
    strength: Strength.NORMAL,
    memo: "!!",
  }
];

const reducer = (
  state: Record[] = initialState,
  action: ReduxType): Record[] => {
  switch (action.type) {
    case (INPUT_DATA):
      return [ ...state, action.data ];
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

export type RootState = ReturnType<typeof rootReducer>;
export default store;