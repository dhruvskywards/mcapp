import {API_INVOCATION, TIER_MEMBER_DATA} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const fetchTierPermissionActions = (_payload, resolve, reject) => {
  const data = _payload;
  console.log("===========Tiew mwmber Profile Action data",data)
  const url = `${ApiConstants.BASE_URL}${ApiConstants.GET_TIER_MEMBER}${data}`;
  console.log("===========Tiew mwmber Profile Action url",url)
  const payload = {
    action: TIER_MEMBER_DATA,
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
