import {
  API_INVOCATION,
  COMPETITION_ACCEPT_TERM_CONDITION_SUCCESS,
  SET_LOCAL_USERDATA,
  SET_STORY_SELECTED_URL, USER_DATA_POST
} from '../../actionType';
import ApiConstants from "../../../utils/ApiConstants";

export const setuserdata = data => {
  const payload = data;
  return {
    type: SET_LOCAL_USERDATA,
    payload,
  };
};
export const storyImage = data => {
  const payload = data;
  return {
    type: SET_STORY_SELECTED_URL,
    payload,
  };
};
