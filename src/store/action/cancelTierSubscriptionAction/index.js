import {API_INVOCATION, TIER_SUBCRIPTION_CANCEL_DATA} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const cancelTierSubscriptionAction = (_payload, resolve, reject) => {
  const data = _payload;
 
  const url = `${ApiConstants.BASE_URL}${ApiConstants.GET_TIER_MEMBER_CANCEL}${data}`;
  console.log("===========User Moderator Profile Action url",url)
  const payload = {
    action: TIER_SUBCRIPTION_CANCEL_DATA,
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
