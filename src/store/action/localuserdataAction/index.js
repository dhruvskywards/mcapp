import {SET_LOCAL_USERDATA} from '../../actionType';

export const setuserdata = data => {
  const payload = data;
  return {
    type: SET_LOCAL_USERDATA,
    payload,
  };
};
