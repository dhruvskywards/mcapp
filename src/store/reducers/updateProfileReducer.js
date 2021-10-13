import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  profileData: [],
  success:false,
  error:false
};

export const updateProfileReducer = createReducer(initialState, {
  [types.UPDATE_PROFILE_DATA_SUCCESS](state, action) {
    return {
      ...state,
      profileData:
      state.profileData.length > 0
      ? [...state.profileData, ...action?.payload]
      : action?.payload,
      success:true
     
    };
  },
  [types.UPDATE_PROFILE_DATA_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
      success:false,
       error:true
    };
  },
  [types.UPDATE_PROFILE_DATA]() {
    return {
      ...initialState,
    };
  },
});
