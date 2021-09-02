import { API_INVOCATION, GET_USER_PROFILE } from "../../actionType";
import ApiConstants from '../../../utils/ApiConstants';

export const GetUserProfile = (_payload,resolve, reject) => {
  console.log('_payload', JSON.stringify(_payload));
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${
    ApiConstants.GET_USER}${data}`;

  const payload = {
    action: GET_USER_PROFILE,
    method: 'GET',
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
