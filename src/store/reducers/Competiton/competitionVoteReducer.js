
import createReducer from "../../../lib/createReducer";
import * as types from "../../actionType";
import {
  COMPETITION_VOTE_SUCCESS,
  COMPETITION_VOTE_ERROR,
  COMPETITION_VOTE_START,
  COMPETITION_VOTE_SELECT,
} from '../../actionType';
const initialState = {
  isLoading: false,
  success: false,
  error: false,
  data: [],
  action: '',
};

export const competitionVoteReducer = createReducer(initialState, {
  [types.COMPETITION_VOTE_START](state, action) {
    return {
      ...state,
      isLoading: true,
      action: COMPETITION_VOTE_START,
    };
  },
  [types.COMPETITION_VOTE_SUCCESS](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_VOTE_SUCCESS,
    };
  },
  [types.COMPETITION_VOTE_ERROR](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: false,
      action: COMPETITION_VOTE_ERROR
    };
  },
  [types.COMPETITION_VOTE_SELECT](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      error: true,
      success: false,
      action: COMPETITION_VOTE_SELECT,
    };
  },
});


