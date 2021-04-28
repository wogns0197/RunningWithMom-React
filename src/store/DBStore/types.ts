import * as actions from './actions';

import { ActionType } from 'typesafe-actions';
import { Record } from '../../types';

export type getDataAction = ActionType<typeof actions>;

export type DataState = {
  userData: {
    loading: boolean;
    error: Error | null;
    data: Record[] | null;
  };
};