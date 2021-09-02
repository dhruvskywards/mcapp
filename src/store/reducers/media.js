import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  media: {},
};

export const media = createReducer(initialState, {
  [types.MEDIA_SUCCESS](state, action) {
    return {
      ...state,
      media: action.payload,
    };
  },
  [types.MEDIA_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
    };
  },
});
