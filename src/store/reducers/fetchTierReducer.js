import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  data: [],
};

export const fetchTierReducer = createReducer(initialState, {
  [types.GET_TIER_DATA_SUCCESS](state, action) {
   

    return {
      ...state,
     
      data: action?.payload,
      
       
    };
  },
  [types.GET_TIER_DATA_ERROR](state) {
  
    return {
      ...state,
      message: 'Something went wrong with server',
     
    };
  },
  [types.GET_TIER_DATA]() {
 
    return {
      ...initialState,
    };
  },
});
