// type constants
import {
  MY_BREAD_CRUMBS,
  BREAD_CRUMBS_IN_AREA,
  MY_FAV_CRUMBS,
} from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = {};

const BreadCrumbReducer = (state = INIT_STATE, action) => {
  let result;

  switch (action.type) {
    case BREAD_CRUMBS_IN_AREA:
      result = action.payload;
      break;

    case MY_BREAD_CRUMBS:
      // result = { ...state, email: action.payload };
      // console.log(action);
      result = action.payload;
      break;

    case MY_FAV_CRUMBS:
      result = action.payload;
      break;

    default:
      result = state;
  }

  return result;
};


export { BreadCrumbReducer };
