import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  data: [],
 
  success: false,
  error: false,
};

export const cancelUserSubscriptionreducer = createReducer(initialState, {
  [types.USER_SUBCRIPTION_CANCEL_DATA_SUCCESS](state, action) {
    return {
      ...state,
      success: true,
      
      data:
        state.data.length > 0
          ? [...action?.payload, ...state.data]
          : action?.payload,
          
    };
    
  },
  [types.USER_SUBCRIPTION_CANCEL_DATA_ERROR](state) {
    return {
      ...state,
      success: false,
      error: true,
      message: 'Something went wrong with server',
    };
  },
  [types.USER_SUBCRIPTION_CANCEL_DATA]() {
    return {
      ...initialState,
    };
  },
});
