import {API_INVOCATION, COMPETITION_LIST} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const competitionList = (_payload, resolve, reject) => {

  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${
    ApiConstants.COMPETITIONLIST
  }${10}${'/'}${data.page}`;

  const payload = {

    action: COMPETITION_LIST,
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
