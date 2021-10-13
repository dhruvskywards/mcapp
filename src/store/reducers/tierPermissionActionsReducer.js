import createReducer from '../../lib/createReducer';
import * as types from '../actionType';
import {isObjectEmpty} from '../../utils/validation';
const initialState = {
  data: {},
 
  success: false,
  error: false,
};

export const tierPermissionActionsReducer = createReducer(initialState, {
  [types.TIER_MEMBER_DATA_SUCCESS](state, action) {
    console.log("TIER_MEMBERS",action)
    return {
      ...state,
    
      data:isObjectEmpty(state.data)
      ? {...action.payload}
      : {...state.data, ...action.payload},
      success: true,
     
    };
    
  },
  [types.TIER_MEMBER_DATA_ERROR](state) {
    return {
      ...state,
      success: false,
      error: true,
      message: 'Something went wrong with server',
    };
  },
  [types.TIER_MEMBER_DATA]() {
    return {
      ...initialState,
    };
  },
});
