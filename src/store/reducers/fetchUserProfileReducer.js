import createReducer from '../../lib/createReducer';
import * as types from '../actionType';
import {isObjectEmpty} from '../../utils/validation';
const initialState = {
  data: {},
 
  success: false,
  error: false,
};

export const fetchUserProfileReducer = createReducer(initialState, {
  [types.PROFILE_DATA_SUCCESS](state, action) {
    console.log("userProfile",action)
    return {
      ...state,
    
      data:isObjectEmpty(state.data)
      ? {...action.payload}
      : {...state.data, ...action.payload},
      success: true,
     
        
    };
    
    
  },
  [types.PROFILE_DATA_ERROR](state) {
    return {
      ...state,
      success: false,
      error: true,
      message: 'Something went wrong with server',
    };
  },
  [types.PROFILE_DATA]() {
    return {
      ...initialState,
    };
  },
});
