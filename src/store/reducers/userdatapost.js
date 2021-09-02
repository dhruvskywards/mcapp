import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  sessionObject: {},
};

export const userDataPost = createReducer(initialState, {
  [types.USER_DATA_POST_SUCCESS](state = initialState, action) {
    return {
      ...state,
      sessionObject: action.payload,
    };
  },
  [types.USER_DATA_POST_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
    };
  },
  [types.RESET_COMPETITION_LIST]() {
    return {
      ...initialState,
    };
  },
});
