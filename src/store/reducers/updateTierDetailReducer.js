import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  tierData: [],
  success:false,
  error:false
};

export const updateTierDetailReducer = createReducer(initialState, {
  [types.UPDATE_TIER_MEMBER_DATA_SUCCESS](state, action) {
    return {
      ...state,
      tierData:
        state.tierData.length > 0
          ? [...state.tierData, ...action?.payload]
          : action?.payload,
     
    };
  },
  [types.UPDATE_TIER_MEMBER_DATA_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
    };
  },
  [types.UPDATE_TIER_MEMBER_DATA]() {
    return {
      ...initialState,
    };
  },
});
