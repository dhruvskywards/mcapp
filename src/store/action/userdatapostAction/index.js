import {API_INVOCATION, USER_DATA_POST} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const userDataPost = (_payload, resolve, reject) => {

  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${ApiConstants.DATA_POST}`;
  const payload = {
    action: USER_DATA_POST,
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
