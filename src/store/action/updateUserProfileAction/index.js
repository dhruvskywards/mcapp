import {API_INVOCATION, UPDATE_PROFILE_DATA} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */

export const updateUserProfileAction = (_payload, resolve, reject) => {
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${ApiConstants.UPDATE_PROFILE}${data.id}`;
  console.log("Update Profile Member url++ ",url,data.userData)
  const payload = {
    action: UPDATE_PROFILE_DATA,
    method: 'POST',
    apiConfig: {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
    url: url, 
    
    data:data.userData,
    resolve,
    reject,
  };
  return {type: API_INVOCATION, payload};
};
