import { MAP_MOVE, MAP_FOCUS_ON_USER } from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = {
  marker: {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  },
  focusOnUser: true,
};

const Map = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  let result;

  switch (type) {
    case MAP_MOVE:
      result = {
        focusOnUser: false,
        marker: {
          latitude: payload.lat,
          longitude: payload.lng,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        },
      };
      break;

    case MAP_FOCUS_ON_USER:
      result = { ...state, focusOnUser: true };
      break;

    default:
      result = state;
  }
  return result;
};

export { Map };
