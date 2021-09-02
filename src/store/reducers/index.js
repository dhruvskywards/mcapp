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
);
