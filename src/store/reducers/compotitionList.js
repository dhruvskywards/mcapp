import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  competitionData: [],
  pageNumber: 0,
};

export const compotitionList = createReducer(initialState, {
  [types.COMPETITION_LIST_SUCCESS](state, action) {
    return {
      ...state,
      competitionData:
        state.competitionData.length > 0 && state.pageNumber > 0
          ? [...state.competitionData, ...action?.payload]
          : action?.payload,
      pageNumber:
        state.competitionData.length === 0
          ? 0
          : action?.payload.length > 0
          ? state.pageNumber + 1
          : state.pageNumber,
    };
  },
  [types.COMPETITION_LIST_ERROR](state) {
    return {
      ...state,
      message: 'Something went wrong with server',
    };
  },
  [types.RESET_COMPETITION_LIST]() {
    return {
      ...initialState,
    };
  },
});
