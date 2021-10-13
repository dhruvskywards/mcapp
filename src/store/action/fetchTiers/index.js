import {API_INVOCATION, GET_TIER_DATA} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const fetchTiers = (_payload, resolve, reject) => {
 
  const url = `${ApiConstants.BASE_URL}${ApiConstants.GET_TIER}`;
  console.log("tier data url",url)
  const payload = {
    action: GET_TIER_DATA,
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
