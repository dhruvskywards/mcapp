
import { API_INVOCATION, ADD_TRACK_SUCCESS } from "../../actionType";
import ApiConstants from '../../../utils/ApiConstants';

export const AddTrack = (_payload,resolve, reject) => {
  console.log("CH-addTr",JSON.stringify(_payload))
  // const id = _payload.id
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${ApiConstants.ADD_TRACK}${7}`;
  const payload = {
    action: ADD_TRACK_SUCCESS,
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
