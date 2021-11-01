import {
  COMPETITION_BEAT_VOTE_SUCCESS,
  COMPETITION_BEAT_VOTE_ERROR,
  COMPETITION_BEAT_VOTE_START, API_INVOCATION,
} from "../../actionType";
import ApiConstants from "../../../utils/ApiConstants";

export const CompetitionBeatVoteAction = (_payload, resolve, reject) => {
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${ApiConstants.COMPETITION_BEAT}${data.id}/${data.userId}`;
  const payload = {
    action: COMPETITION_BEAT_VOTE_SUCCESS,
    method: 'POST',
    apiConfig: {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
    url: url,
    data,
    resolve,
    reject,
  };
  return {type: API_INVOCATION, payload};

};
