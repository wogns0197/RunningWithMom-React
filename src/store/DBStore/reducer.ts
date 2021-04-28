import { DataState, getDataAction } from './types';
import { GET_USERDATA, GET_USERDATA_FAIL, GET_USERDATA_SUCCESS } from './actions';

import { createReducer } from 'typesafe-actions';

const initialState: DataState = {
  userData: {
    loading: false,
    error: null,
    data: null,
  }
};

const mongoreducer = createReducer<DataState, getDataAction>(initialState, {
  [GET_USERDATA]: state => ({
    ...state,
    userData: {
      loading: true,
      error: null,
      data: null,
    }
  }),
  [GET_USERDATA_SUCCESS]: (state, action) => ({
    ...state,
    userData: {
      loading: false,
      error: null,
      data: action.payload,
    }
  }),
  [GET_USERDATA_FAIL]: (state, action) => ({
    ...state,
    userData: {
      loading: false,
      error: action.payload,
      data: null,
    }
  })
});

export default mongoreducer;