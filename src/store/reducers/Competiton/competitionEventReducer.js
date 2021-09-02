import * as types from '../../actionType';
import {
  COMPETITION_AD_ENDED,
  COMPETITION_AD_STARTED,
  COMPETITION_AD_STARTING,
  COMPETITION_CONTESTANT_INFO_STARTED,
  COMPETITION_CONTESTANT_INFO_STARTING,
  COMPETITION_ENDED,
  COMPETITION_PARTICIPANT_STARTED,
  COMPETITION_PARTICIPANT_STARTING,
  COMPETITION_PARTICIPANTS_ADDED,
  COMPETITION_PREROLL_ENDED,
  COMPETITION_PREROLL_STARTED,
  COMPETITION_PREROLL_STARTING,
  COMPETITION_ROUND_STARTED,
  COMPETITION_ROUND_STARTING,
  COMPETITION_VIEWERS_ADDED,
  COMPETITION_YOURTURN_STARTED,
  COMPETITION_YOURTURN_STARTING,
} from '../../actionType';
import createReducer from '../../../lib/createReducer';
import _ from 'lodash';
const initialState = {
  isLoading: false,
  success: false,
  error: false,
  data: {},
  action: '',
  participants: [],
  viewers: [],
  participant: {},
  yourData: {},
  round: {},
  ads: {},
  preRoll: {},
  points: {},
  comment: [],
};

export const competitionEventReducer = createReducer(initialState, {
  [types.COMPETITION_PARTICIPANT_STARTING](state, action) {
    return {
      ...state,
      isLoading: true,
      participant: action.payload,
      success: true,
      action: COMPETITION_PARTICIPANT_STARTING,
    };
  },
  [types.COMPETITION_PARTICIPANT_STARTED](state, action) {
    return {
      ...state,
      participant: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_PARTICIPANT_STARTED,
    };
  },
  [types.COMPETITION_PARTICIPANTS_ADDED](state, action) {
    return {
      ...state,
      participants: action.payload,
      isLoading: false,
      success: false,
      action: COMPETITION_PARTICIPANTS_ADDED,
    };
  },
  [types.COMPETITION_VIEWERS_ADDED](state, action) {
    return {
      ...state,
      viewers: action.payload,
      isLoading: false,
      success: false,
      action: COMPETITION_VIEWERS_ADDED,
    };
  },
  [types.COMPETITION_ENDED](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_ENDED,
    };
  },
  [types.COMPETITION_ROUND_STARTING](state, action) {
    return {
      ...state,
      isLoading: true,
      round: action.payload,
      success: true,
      action: COMPETITION_ROUND_STARTING,
    };
  },
  [types.COMPETITION_ROUND_STARTED](state, action) {
    return {
      ...state,
      round: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_ROUND_STARTED,
    };
  },
  [types.COMPETITION_AD_STARTING](state, action) {
    return {
      ...state,
      isLoading: true,
      ads: action.payload,
      success: true,
      action: COMPETITION_AD_STARTING,
    };
  },
  [types.COMPETITION_AD_STARTED](state, action) {
    console.log('CH-ADS', JSON.stringify(action));
    return {
      ...state,
      ads: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_AD_STARTED,
    };
  },
  [types.COMPETITION_AD_ENDED](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_AD_ENDED,
    };
  },
  [types.COMPETITION_PREROLL_STARTING](state, action) {
    return {
      ...state,
      preRoll: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_PREROLL_STARTING,
    };
  },
  [types.COMPETITION_PREROLL_STARTED](state, action) {
    return {
      ...state,
      preRoll: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_PREROLL_STARTED,
    };
  },
  [types.COMPETITION_PREROLL_ENDED](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_PREROLL_ENDED,
    };
  },
  [types.COMPETITION_CONTESTANT_INFO_STARTING](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_CONTESTANT_INFO_STARTING,
    };
  },
  [types.COMPETITION_CONTESTANT_INFO_STARTED](state, action) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_CONTESTANT_INFO_STARTED,
    };
  },
  [types.COMPETITION_YOURTURN_STARTING](state, action) {
    return {
      ...state,
      yourData: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_YOURTURN_STARTING,
    };
  },
  [types.COMPETITION_YOURTURN_STARTED](state, action) {
    return {
      ...state,
      yourData: action.payload,
      isLoading: false,
      success: true,
      action: COMPETITION_YOURTURN_STARTED,
    };
  },
  [types.NEW_COMMENTS](state, action) {
    let c = [...state.comment, {...action.payload}];
    let d = _.orderBy(c, ['timestamp', 'asc']);
    return {
      ...state,
      comment: d,
    };
  },
});
