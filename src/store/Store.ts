import { Record, Strength, Weather } from '../types/index';
import { combineReducers, createStore } from 'redux';

// type ReduxType = 
//   ReturnType<typeof inputData>
//   | ReturnType<typeof getData>
//   | ReturnType<typeof editData>
//   | ReturnType<typeof removeData>
// ;
type ReduxType = {
  type: 'INPUT_DATA';
  data: Record;
} 
;

// type ActionFunc = (data: Record, idx?: number) => ({ type: string, data: Record });

const INPUT_DATA = 'INPUT_DATA';
const GET_DATA = 'GET_DATA';
const EDIT_DATA = 'EDIT_DATA';
const REMOVE_DATA = 'REMOVE_DATA'; // not usual

export const inputData = (data?: Record): ReduxType => ({ type: INPUT_DATA, data });
// const getData = (data) => ({ type: GET_DATA, data});
// const editData = (data) => ({ type: EDIT_DATA, data });
// const removeData = (data) => ({ type: REMOVE_DATA, data});

const initialState: Record[] = [ // DUMMY DATA
  {
    key: ['2021', '4', '21', '오후 4:30:55'],
    year: 2021,
    month: 4,
    day: 21,
    goal: 10,
    records: 8,
    weather: Weather.CLOUD,
    strength: Strength.EASY,
    memo: "!!",
  },
  {
    key: ['2021', '4', '20', '오후 4:30:55'],
    year: 2021,
    month: 4,
    day: 20,
    goal: 3,
    records: 2,
    weather: Weather.SNOW,
    strength: Strength.HARD,
    memo: "!!",
  },
  {
    key: ['2021', '4', '19', '오후 4:30:55'],
    year: 2021,
    month: 4,
    day: 19,
    goal: 9,
    records: 5,
    weather: Weather.SUNNY,
    strength: Strength.NORMAL,
    memo: "!!",
  },
  {
    key: ['2021', '4', '18', '오후 4:30:55'],
    year: 2021,
    month: 4,
    day: 18,
    goal: 10,
    records: 10,
    weather: Weather.SUNNY,
    strength: Strength.EASY,
    memo: "!!",
  },
  {
    key: ['2021', '4', '17', '오후 4:30:55'],
    year: 2021,
    month: 4,
    day: 17,
    goal: 5,
    records: 8,
    weather: Weather.FOGGY,
    strength: Strength.NORMAL,
    memo: "!!",
  },
];

const reducer = ( 
  action: ReduxType,
  state: Record[] = initialState): Record[] => {
  switch (action.type) {
    case (INPUT_DATA):
      return [ ...state, action.data ];
    // case (GET_DATA):
    //   return state;
    // case (EDIT_DATA):
    //   return state;
    // case (REMOVE_DATA):
    //   return state;
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