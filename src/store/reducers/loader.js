import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  loading: false,
};

export const loader = createReducer(initialState, {
  [types.ENABLE_LOADER](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.DISABLE_LOADER](state) {
    return {
      ...state,
      loading: false,
    };
  },
});
