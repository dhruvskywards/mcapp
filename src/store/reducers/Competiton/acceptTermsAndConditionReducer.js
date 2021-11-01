
import createReducer from "../../../lib/createReducer";
import * as types from "../../actionType";

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  data: [],
};

export const acceptTermsAndConditionReducer = createReducer(initialState, {

  [types.COMPETITION_ACCEPT_TERM_CONDITION_START](state, action) {
    return {
      ...state,
      isLoading: true,
    };
  },
  [types.COMPETITION_ACCEPT_TERM_CONDITION_SUCCESS](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: true,
    };
  },
  [types.COMPETITION_ACCEPT_TERM_CONDITION_ERROR](state, action) {
    return {
      ...state,
      ...action.payload,
      isLoading: false,
      error: true,
      success: false,
    };
  },
});
