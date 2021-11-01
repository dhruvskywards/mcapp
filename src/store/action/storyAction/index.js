import {API_INVOCATION, STORY_LIST} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const storyList = (_payload, resolve, reject) => {
  console.log('_payload', _payload);
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${ApiConstants.STORY}`;
  const payload = {
    action: STORY_LIST,
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
