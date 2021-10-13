import {API_INVOCATION, USER_SUBCRIPTION_CANCEL_DATA} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const cancelUserSubscriptionAction = (_payload, resolve, reject) => {
  const data = _payload;
 
  const url = `${ApiConstants.BASE_URL}${ApiConstants.GET_USER_SUBCRIPTION_CANCEL}${data}`;
 
  const payload = {
    action: USER_SUBCRIPTION_CANCEL_DATA,
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
