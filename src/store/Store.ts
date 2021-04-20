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

const initialState: Record[] = [ // DUMMY DATA
  {
    key: ['2021', '4', '21', '오후 4:30:55'],
    year: 2021,
    month: 4,
    day: 21,
    goal: 100,
    records: 80,
    weather: Weather.CLOUD,
    strength: Strength.NORMAL,
    memo: "!!",
  },
  {
    key: ['2021', '4', '20', '오후 4:30:55'],
    year: 2021,
    month: 4,
    day: 20,
    goal: 50,
    records: 20,
    weather: Weather.CLOUD,
    strength: Strength.NORMAL,
    memo: "!!",
  },
  {
    key: ['2021', '4', '19', '오후 4:30:55'],
    year: 2021,
    month: 4,
    day: 19,
    goal: 90,
    records: 20,
    weather: Weather.CLOUD,
    strength: Strength.NORMAL,
    memo: "!!",
  },
  {
    key: ['2021', '4', '18', '오후 4:30:55'],
    year: 2021,
    month: 4,
    day: 18,
    goal: 100,
    records: 0,
    weather: Weather.CLOUD,
    strength: Strength.NORMAL,
    memo: "!!",
  },
  {
    key: ['2021', '4', '17', '오후 4:30:55'],
    year: 2021,
    month: 4,
    day: 17,
    goal: 80,
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