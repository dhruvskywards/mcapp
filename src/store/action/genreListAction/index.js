import {API_INVOCATION, GENRE_LIST} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const genresList = (_payload, resolve, reject) => {
  const url = `${ApiConstants.BASE_URL}${ApiConstants.GENRELIST}`;
  const payload = {
    action: GENRE_LIST,
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
