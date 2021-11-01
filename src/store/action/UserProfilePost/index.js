
import { API_INVOCATION, USER_PROFILE_CONTENT_SUCCESS } from "../../actionType";
import ApiConstants from '../../../utils/ApiConstants';

export const UserProfilePost = (_payload,resolve, reject) => {
    const data = _payload;
    const url = `${ApiConstants.BASE_URL}${ApiConstants.GET_CONTENT_USER}${data.uid}`;
    const payload = {
        action: USER_PROFILE_CONTENT_SUCCESS,
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
