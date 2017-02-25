
import {
  MENU_OPENED,
  MENU_CLOSED,
} from 'Bread_Crumbs/src/controllers/actions/types';

export const menuOpened = (bool) => {
  return {
    type: MENU_OPENED,
    payload: bool,
  };
};

export const menuClosed = (bool) => {
  return {
    type: MENU_CLOSED,
    payload: bool,
  };
};
