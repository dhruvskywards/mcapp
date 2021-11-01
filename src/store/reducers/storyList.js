import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  storydata: [],
};

export const storyList = createReducer(initialState, {
  [types.STORY_LIST_SUCCESS](state, action) {
    return {
      ...state,
      storydata:
        state.storydata.length > 0
          ? [...state.storydata, ...action?.payload]
          : action?.payload,
    };
  },
  [types.STORY_LIST_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
    };
  },
});
