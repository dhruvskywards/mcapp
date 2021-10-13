import {API_INVOCATION, DELETE_USER_DATA} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */

export const deleteAccountAction = (_payload, resolve, reject) => {
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${ApiConstants.DELETE_USER}${data.id}`;
  console.log("Delete User",url,",",data)
  const payload = {
    action: DELETE_USER_DATA,
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
