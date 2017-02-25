import { MAP_MARKER_FOCUS, MAP_MARKER_BLUR } from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = { show: false };

const MapMarker = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  let result;

  switch (type) {
    case MAP_MARKER_FOCUS:
      result = { show: true, ...payload };
      break;

    case MAP_MARKER_BLUR:
      result = INIT_STATE;
      break;

    default:
      result = state;
  }

  return result;
};

export { MapMarker }
