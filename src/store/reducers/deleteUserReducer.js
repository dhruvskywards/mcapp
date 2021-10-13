import createReducer from '../../lib/createReducer';
import * as types from '../actionType';
import {isObjectEmpty} from '../../utils/validation';

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  data: [],
};
export const deleteUserReducer = createReducer(initialState, {
  [types.DELETE_USER_DATA_SUCCESS](state, action) {
    return {
      ...state,
      data:
        state.data.length > 0
          ? [...action?.payload, ...state.data]
          : action?.payload,
    };
  },
  [types.DELETE_USER_DATA_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
    };
  },
  [types.DELETE_USER_DATA]() {
    return {
      ...initialState,
    };
  },
});
