import {API_INVOCATION, USER_CONNECTION_DATA} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const userConnectionAction = (_payload, resolve, reject) => {
  console.log('_payload', JSON.stringify(_payload));

  const data = _payload;
  
  const url = `${ApiConstants.BASE_URL}${ApiConstants.GET_USER_CONNECTION}${data}`;
  console.log("user connection url",url)
  const payload = {
    action: USER_CONNECTION_DATA,
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
  console.log("Action User Connection data==",payload.resolve)
  return {type: API_INVOCATION, payload};
};
