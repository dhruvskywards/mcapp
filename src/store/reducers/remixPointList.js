import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  data: [],
 
  success: false,
  error: false,
};

export const remixPointList = createReducer(initialState, {
  [types.REMIXPOINTS_SUCCESS](state, action) {
    console.log("remixPoints",action)
    return {
      ...state,
      success: true,
      
      data:
        state.data.length > 0
          ? [...action?.payload, ...state.data]
          : action?.payload,
          
    };
    
  },
  [types.REMIXPOINTS_ERROR](state) {
    return {
      ...state,
      success: false,
      error: true,
      message: 'Something went wrong with server',
    };
  },
  [types.REMIXPOINTS]() {
    return {
      ...initialState,
    };
  },
});
