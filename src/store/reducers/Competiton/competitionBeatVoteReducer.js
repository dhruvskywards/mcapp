
import createReducer from "../../../lib/createReducer";
import * as types from "../../actionType";
import {
  COMPETITION_BEAT_VOTE_SUCCESS,
  COMPETITION_BEAT_VOTE_ERROR,
  COMPETITION_BEAT_VOTE_START,
  COMPETITION_BEAT_VOTE_UPDATE,
  COMPETITION_BEAT_VOTE_STATUS,
} from '../../actionType';
const initialState = {
  isLoading: false,
  success: false,
  error: false,
  data: { },
  action: '',
  voteStatus:''
};

export const competitionBeatVoteReducer = createReducer(initialState, {
  [types.COMPETITION_BEAT_VOTE_START](state, action) {
    return {
      ...state,
      isLoading: true,
      action: COMPETITION_BEAT_VOTE_START,
    };
  },
  [types.COMPETITION_BEAT_VOTE_SUCCESS](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_BEAT_VOTE_SUCCESS,
    };
  },
  [types.COMPETITION_BEAT_VOTE_UPDATE](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: false,
      action: COMPETITION_BEAT_VOTE_UPDATE,
      voteStatus: true
    };
  },
  [types.COMPETITION_BEAT_VOTE_ERROR](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      error: true,
      success: false,
      action: COMPETITION_BEAT_VOTE_ERROR,
    };
  },
  [types.COMPETITION_BEAT_VOTE_STATUS](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      error: true,
      success: false,
      action: COMPETITION_BEAT_VOTE_STATUS,
    };
  },
});


