import {API_INVOCATION, COMPETITION_ACCEPT_TERM_CONDITION_SUCCESS} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

/**
 *
 * Category Name
 */
export const AcceptTermsAndConditionAction = (_payload, resolve, reject) => {
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${data.type}/tc/${data.id}/${data.userId}`;
  const payload = {
    action: COMPETITION_ACCEPT_TERM_CONDITION_SUCCESS,
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


