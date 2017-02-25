import {
  BREAD_CRUMB_UPDATE,
  BREAD_CRUMB_CREATED,
  BREAD_CRUMB_UPDATED,
} from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = {
  title: '',
  message: '',
  discoverable: false,
  lat: null,
  lng: null,
  createdAt: '', // Date obj
  userId: '',
};

const BreadCrumbForm = (state = INIT_STATE, action) => {
  const { type, payload } = action;

  let result;

  switch (type) {
    case BREAD_CRUMB_UPDATE:
      result = { ...state, [payload.prop]: payload.value };
      break;

    case BREAD_CRUMB_CREATED:
      result = INIT_STATE;
      break;

    case BREAD_CRUMB_UPDATED:
      result = INIT_STATE;
      break;

    default:
      result = state;
  }

  return result;
};

export { BreadCrumbForm };
