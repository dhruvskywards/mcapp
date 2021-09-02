import {ENABLE_LOADER, DISABLE_LOADER} from '../../actionType';

export const setStartLoader = () => {
  return {
    type: ENABLE_LOADER,
  };
};

export const setStopLoader = () => {
  return {
    type: DISABLE_LOADER,
  };
};
