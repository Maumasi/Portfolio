import {
  MENU_OPENED,
  MENU_CLOSED,
} from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = { menuState: false };

const MenuState = (state = INIT_STATE, action) => {
  let result;
  const { type, payload } = action;

  switch (type) {
    case MENU_OPENED:
      result = { ...state, menuState: true };
      break;

    case MENU_CLOSED:
      result = { ...state, menuState: false };
      break;

    default:
      result = state;
  }

  // make icon close on press if menu is open
  if (state.menuState === true && payload === true) {
    result = { ...state, menuState: false };
  }

  return result;
};

export { MenuState };
