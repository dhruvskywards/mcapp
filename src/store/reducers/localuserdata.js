import createReducer from '../../lib/createReducer';
import * as types from '../actionType';
import {isObjectEmpty} from '../../utils/validation';

const initialState = {
  userdata: {},
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
