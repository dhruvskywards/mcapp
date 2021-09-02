import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  postData: [],
  pageNumber: 0,
};

export const postList = createReducer(initialState, {
  [types.POST_LIST_SUCCESS](state, action) {
    return {
      ...state,
      postData:
        state.postData.length > 0 && state.pageNumber > 0
          ? [...state.postData, ...action?.payload]
          : action?.payload,
      pageNumber:
        state.postData.length === 0
          ? 0
          : action?.payload.length > 0
          ? state.pageNumber + 1
          : state.pageNumber,
    };
  },
  [types.POST_LIST_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
    };
  },
});
