import { Record, Strength, Weather } from '../types/index';
import { combineReducers, createStore } from 'redux';

type ReduxType = 
  | ReturnType<typeof inputData>  
  | ReturnType<typeof editData>
  | ReturnType<typeof removeData>
;


const INPUT_DATA = 'INPUT_DATA' as const; // as const for not being 'string', also real value
const EDIT_DATA = 'EDIT_DATA' as const;
const REMOVE_DATA = 'REMOVE_DATA' as const;

// export const inputData = (data: Record): ReduxType => ({ type: INPUT_DATA, data });
export const inputData = (data: Record) => ({
  type: INPUT_DATA,
  data: data,
});
const editData = (data: Record) => ({ type: EDIT_DATA, data });
export const removeData = (idx: number) => ({ type: REMOVE_DATA, idx});

const initialState: Record[] = [ // DUMMY DATA
  {
    key: 0,
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
    key: 1,
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
    key: 2,
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
    key: 3,
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
    key: 4,
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
  state: Record[] = initialState,
  action: ReduxType
  ): Record[] => {

  switch (action.type) {
    case (INPUT_DATA):
      return [ ...state, action.data ];    
    case (EDIT_DATA):
      return state;
    case (REMOVE_DATA):      
      return state.splice(action.idx,1);
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