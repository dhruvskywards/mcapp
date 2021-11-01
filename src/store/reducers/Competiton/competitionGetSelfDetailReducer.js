
import createReducer from "../../../lib/createReducer";
import * as types from "../../actionType";

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  data: [],
  action: '',
};

export const competitionGetSelfDetailReducer = createReducer(initialState, {
  [types.COMPETITION_GET_SELF_DETAIL_START](state, action) {
    return {
      ...state,
      isLoading: true,
    };
  },
  [types.COMPETITION_GET_SELF_DETAIL_SUCCESS](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: true,
    };
  },
  [types.COMPETITION_GET_SELF_DETAIL_ERROR](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: false,
      error: true,
    };
  },
});


