import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  data: [],
  success: false,
  error: false,
  
};

export const fetchUserConnectionReducer = createReducer(initialState, {
  [types.USER_CONNECTION_DATA_SUCCESS](state, action) {
    console.log('statess s', action)

    return {
      ...state,
      success: true,
      data: action?.payload
      //  state.data.length > 0
      //   ? [...action?.payload, ...state.data]
      //    : action?.payload,
       
    };
  },
  [types.USER_CONNECTION_DATA_ERROR](state) {
    console.log('statess e', initialState)

    return {
      ...state,
      message: 'Something went wrong with server',
      success: false,
      error: true,
    };
  },
  [types.USER_CONNECTION_DATA]() {
    console.log('statess d', initialState)

    return {
      ...initialState,
    };
  },
});
