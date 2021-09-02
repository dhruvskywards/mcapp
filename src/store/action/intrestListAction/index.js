import {API_INVOCATION, INTREST_LIST} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const intrestList = (_payload, resolve, reject) => {
  const url = `${ApiConstants.BASE_URL}${ApiConstants.INTRESTLIST}`;
  const payload = {
    action: INTREST_LIST,
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
