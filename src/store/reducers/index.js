/*
 * combines all th existing reducers
 */

import * as loaderReducer from './loader';
import * as postListReducer from './postList';
import * as compotitionListReducer from './compotitionList';
import * as competitionEventReducer  from "./Competiton/competitionEventReducer";
import * as acceptTermsAndConditionReducer  from "./Competiton/acceptTermsAndConditionReducer";
import * as competitionGetSelfDetailReducer from "./Competiton/competitionGetSelfDetailReducer";
import * as genresList from './genreList';
import * as localuserdata from './localuserdata';
import * as intrestList from './intrestList';
import * as userDataPost from './userdatapost';
import * as media from './media';
import * as remixPointList from './remixPointList';
import * as fetchUserProfileReducer from './fetchUserProfileReducer';
import * as fetchModeratorProfileReducer from './fetchModeratorProfileReducer';
import * as cancelUserSubscriptionreducer from './cancelUserSubscriptionreducer';
import * as cancelTierSubcriptionreducer from './cancelTierSubcriptionreducer';
import * as fetchUserConnectionReducer from './fetchUserConnectionReducer';
import * as tierPermissionActionsReducer from './tierPermissionActionsReducer';
import * as updateTierDetailReducer from './updateTierDetailReducer';
import * as updateProfileReducer from './updateProfileReducer';
import * as deleteUserReducer from './deleteUserReducer';
import * as fetchSubscriptionReducer from './fetchSubscriptionReducer';
import * as fetchTierReducer from './fetchTierReducer';
export default Object.assign(
  loaderReducer,
  postListReducer,
  compotitionListReducer,
  competitionEventReducer,
  acceptTermsAndConditionReducer,
  competitionGetSelfDetailReducer,
  genresList,
  localuserdata,
  intrestList,
  userDataPost,
  media,
  remixPointList,
  fetchUserProfileReducer,
  fetchModeratorProfileReducer,
  cancelUserSubscriptionreducer,
  cancelTierSubcriptionreducer,
  fetchUserConnectionReducer,
  tierPermissionActionsReducer,
  updateTierDetailReducer,
  updateProfileReducer,
  deleteUserReducer,
  fetchSubscriptionReducer,
  fetchTierReducer
);
