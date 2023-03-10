import { SCROLL_POSTION_CHANGED, THEME_CHANGED } from "./identifiers";

export const toggleTheme = (theme) => {
  return {
    type: THEME_CHANGED,
    payload: theme,
  };
};

export const changeScrollPosition = (position) => {
  return {
    type: SCROLL_POSTION_CHANGED,
    payload: position,
  };
};
