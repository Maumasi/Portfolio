import {
  BREAD_CRUMB_UPDATE,
} from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  const { type } = action;
  let result;

  switch (type) {
    case BREAD_CRUMB_UPDATE:
      result = {};
      break;
    default:
      result = {};
  }

  return result;
};
