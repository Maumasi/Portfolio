
import { Actions } from 'react-native-router-flux';

// type constants
import { MAP_MOVE, MAP_MARKER_FOCUS, MAP_MARKER_BLUR, MAP_FOCUS_ON_USER } from 'Bread_Crumbs/src/controllers/actions/types';

export const mapMove = (value) => {
  return {
    type: MAP_MOVE,
    payload: value,
  };
};

export const findUser = () => {
  return {
    type: MAP_FOCUS_ON_USER,
  };
};

export const mapMarkerFocus = (markerObj) => {
  return {
    type: MAP_MARKER_FOCUS,
    payload: markerObj,
  };
};

export const mapMarkerBlur = () => {
  return {
    type: MAP_MARKER_BLUR,
  };
};

// {
//   marker: {
//     latitude: null,
//     longitude: null,
//     latitudeDelta: 0.03,
//     longitudeDelta: 0.03,
//   },
//   focusOnUser: true,
// };

// export const findUser = (dispatch) => {
//   navigator.geolocation.getCurrentPosition((geo) => {
//
//     const { latitude, longitude } = geo.coords;
//
//     console.log(geo.coords);
//
//     const marker = {
//       lat: latitude,
//       lng: longitude,
//       latitudeDelta: 0.003,
//       longitudeDelta: 0.003,
//     // focusOnUser: true,
//     };
//
//     dispatch({ type: MAP_FOCUS_ON_USER, payload: marker });
//     return () => {
//       console.log(marker);
//       // Actions.mapActivities();
//     }; // return
//   }); // getCurrentPosition
// };
