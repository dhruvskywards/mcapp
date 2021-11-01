import { API_INVOCATION, GET_USER_PROFILE } from "../../actionType";
import ApiConstants from '../../../utils/ApiConstants';

export const userProfile = (_payload,resolve, reject) => {
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${
    ApiConstants.GET_USER_PROFILE}${data}`;
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
