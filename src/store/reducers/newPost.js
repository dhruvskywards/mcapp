import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  sessionObject: {},
};
export const newPost = createReducer(initialState, {
  [types.NEW_POST_DATA_SUCCESS](state = initialState, action) {
    return {
      ...state,
      sessionObject: action.payload,
    };
  },
  [types.NEW_POST_DATA_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
    };
  },
});
