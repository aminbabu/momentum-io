import { THEME_CHANGED } from "./identifiers";

export const toggleTheme = (theme) => {
  return {
    type: THEME_CHANGED,
    payload: theme,
  };
};

export const changeScrollPosition = (position) => {
  return {
    type: THEME_CHANGED,
    payload: position,
  };
};
