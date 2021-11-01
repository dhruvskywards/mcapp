import createReducer from '../../lib/createReducer';
import * as types from '../actionType';
import {isObjectEmpty} from '../../utils/validation';

const initialState = {
  userdata: {},
  url: {},
};

export const localuserdata = createReducer(initialState, {
  [types.SET_LOCAL_USERDATA](state = initialState, action) {
    return {
      ...state,
      userdata: isObjectEmpty(state.userdata)
        ? {...action.payload}
        : {...state.userdata, ...action.payload},
    };
  },
});

export const storySelectedUrl = createReducer(initialState, {
  [types.SET_STORY_SELECTED_URL](state = initialState, action) {
    return {
      ...state,
      url: isObjectEmpty(state.url)
        ? {...action.payload}
        : {...state.userdata, ...action.payload},
    };
  },
});
