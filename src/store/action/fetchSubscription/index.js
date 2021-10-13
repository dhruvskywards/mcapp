import {API_INVOCATION, SUBSCRIPTION_DATA} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const fetchSubscription = (_payload, resolve, reject) => {
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${ApiConstants.GET_SUBSCRIPTION}`;
 
  const payload = {
    action: SUBSCRIPTION_DATA,
    method: 'GET',
    apiConfig: {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
    url: url,
  
    resolve,
    reject,
  };
  return {type: API_INVOCATION, payload};
};
