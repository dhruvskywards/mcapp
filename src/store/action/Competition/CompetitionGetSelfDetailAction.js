import {API_INVOCATION, COMPETITION_GET_SELF_DETAIL_SUCCESS} from '../../actionType';
import ApiConstants from '../../../utils/ApiConstants';

export const CompetitionGetSelfDetailAction = (_payload, resolve, reject) => {
  const data = _payload;
  const url = `${ApiConstants.BASE_URL}${ApiConstants.GET_COPETITION_SELF}${data.type}/${data.userId}/${data.competitionId}`;
  const payload = {
    action: COMPETITION_GET_SELF_DETAIL_SUCCESS,
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


