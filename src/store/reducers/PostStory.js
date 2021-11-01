import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  sessionObject: {},
};
export const PostStory = createReducer(initialState, {
  [types.POST_STORY_DATA_SUCCESS](state = initialState, action) {
    return {
      ...state,
      sessionObject: action.payload,
    };
  },
  [types.POST_STORY_DATA_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
    };
  },
});
