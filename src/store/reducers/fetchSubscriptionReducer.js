import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  data: [],
  success: false,
  error: false,
  
};

export const fetchSubscriptionReducer = createReducer(initialState, {
  [types.SUBSCRIPTION_DATA_SUCCESS](state, action) {
  

    return {
      ...state,
      success: true,
      data: action?.payload
      //  state.data.length > 0
      //   ? [...action?.payload, ...state.data]
      //    : action?.payload,
       
    };
  },
  [types.SUBSCRIPTION_DATA_ERROR](state) {
    

    return {
      ...state,
      message: 'Something went wrong with server',
      success: false,
      error: true,
    };
  },
  [types.SUBSCRIPTION_DATA]() {
  

    return {
      ...initialState,
    };
  },
});
