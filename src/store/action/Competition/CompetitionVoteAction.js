
import {
  COMPETITION_VOTE_SUCCESS,
  COMPETITION_VOTE_START,
  COMPETITION_VOTE_ERROR, API_INVOCATION,
} from "../../actionType";
import ApiConstants from "../../../utils/ApiConstants";

export const CompetitionVoteAction = (_payload, resolve, reject) => {
  console.log("CH-RT00",JSON.stringify(_payload))
   const data = _payload;
  const url = `${ApiConstants.BASE_URL}${ApiConstants.COMPETITION_VOTE}`;
  const payload = {
    action: COMPETITION_VOTE_SUCCESS,
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
