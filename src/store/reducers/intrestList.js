import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  intrest: [],
};

export const intrestList = createReducer(initialState, {
  [types.INTREST_LIST_SUCCESS](state, action) {
    const transformed = action?.payload.map(data => ({
      label: data.name,
      ...data,
    }));
    return {
      ...state,
      intrest:
        state.intrest.length > 0
          ? [...transformed, ...state.intrest]
          : transformed,
    };
  },
  [types.INTREST_LIST_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
    };
  },
});
