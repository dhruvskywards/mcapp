import {API_INVOCATION, UPDATE_TIER_MEMBER_DATA} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */

export const updateTierDetailsAction = (_payload, resolve, reject) => {
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${ApiConstants.UPDATE_TIER_MEMBER_DATA}${data.id}`;
  console.log("Update Tier Member url+++ ",url,data.userData)
  const payload = {
    action: UPDATE_TIER_MEMBER_DATA,
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
