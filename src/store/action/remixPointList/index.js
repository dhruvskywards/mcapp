import {API_INVOCATION, REMIXPOINTS} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Points
 */
export const remixPointList = (_payload, resolve, reject) => {
  const url = `${ApiConstants.BASE_URL}${ApiConstants.REMIX_POINTS}`;
  const payload = {
    action: REMIXPOINTS,
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
