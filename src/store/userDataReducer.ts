import { Record } from '../types';

type ReduxType = 
  | ReturnType<typeof inputData>  
  | ReturnType<typeof editData>
  | ReturnType<typeof removeData>
;


const INPUT_DATA = 'INPUT_DATA' as const; // as const for not being 'string', also real value
const EDIT_DATA = 'EDIT_DATA' as const;
const REMOVE_DATA = 'REMOVE_DATA' as const;


export const inputData = (data: Record) => ({type: INPUT_DATA, data: data});
export const editData = (data: Record) => ({ type: EDIT_DATA, data });
export const removeData = (idx: string[]) => ({ type: REMOVE_DATA, idx});


const UserDataInitialState: Record[] = [ // DUMMY DATA
  // {
  //   key: ['2021', '4', '21', '오후 4:30:55'],
  //   userid:'jjahoo',
  //   year: 2021,
  //   month: 4,
  //   day: 21,
  //   goal: 10,
  //   records: 8,
  //   weather: Weather.CLOUD,
  //   strength: Strength.EASY,
  //   memo: "!!",
  // },
  // {
  //   key: ['2021', '4', '20', '오후 4:30:55'],
  //   userid:'jjahoo',
  //   year: 2021,
  //   month: 4,
  //   day: 20,
  //   goal: 3,
  //   records: 2,
  //   weather: Weather.SNOW,
  //   strength: Strength.HARD,
  //   memo: "!!",
  // },
  // {
  //   key: ['2021', '4', '19', '오후 4:30:55'],
  //   userid:'jjahoo',
  //   year: 2021,
  //   month: 4,
  //   day: 19,
  //   goal: 9,
  //   records: 5,
  //   weather: Weather.SUNNY,
  //   strength: Strength.NORMAL,
  //   memo: "!!",
  // },
  // {
  //   key: ['2021', '4', '18', '오후 4:30:55'],
  //   userid:'wogns0197',
  //   year: 2021,
  //   month: 4,
  //   day: 18,
  //   goal: 10,
  //   records: 10,
  //   weather: Weather.SUNNY,
  //   strength: Strength.EASY,
  //   memo: "!!",
  // },
  // {
  //   key: ['2021', '4', '17', '오후 4:30:55'],
  //   userid:'wogns0197',
  //   year: 2021,
  //   month: 4,
  //   day: 17,
  //   goal: 5,
  //   records: 8,
  //   weather: Weather.FOGGY,
  //   strength: Strength.NORMAL,
  //   memo: "!!",
  // },
];

const UserData = (
  state: Record[] = UserDataInitialState,
  action: ReduxType
  ): Record[] => {

  switch (action.type) {
    case (INPUT_DATA):
      return [ ...state, action.data ];    
    case (EDIT_DATA):
      return state;
    case (REMOVE_DATA):      
      return state.filter(el => JSON.stringify(el.key) !== JSON.stringify(action.idx));
    default:
      return state;
  }
};

export default UserData;