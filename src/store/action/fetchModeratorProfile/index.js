import {API_INVOCATION, PROFILE_MODERATOR_DATA} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const fetchModeratorProfile = (_payload, resolve, reject) => {
  const data = _payload;
  console.log("===========User Moderator Profile Action",data)
  const url = `${ApiConstants.BASE_URL}${ApiConstants.GET_USER_PROFILE}${data}`;
  console.log("===========User Moderator Profile Action url",url)
  const payload = {
    action: PROFILE_MODERATOR_DATA,
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
