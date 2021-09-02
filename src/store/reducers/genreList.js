import createReducer from '../../lib/createReducer';
import * as types from '../actionType';

const initialState = {
  genreData: [],
};

export const genresList = createReducer(initialState, {
  [types.GENRE_LIST_SUCCESS](state, action) {
    return {
      ...state,
      genreData:
        state.genreData.length > 0
          ? [...action?.payload, ...state.genreData]
          : action?.payload,
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
