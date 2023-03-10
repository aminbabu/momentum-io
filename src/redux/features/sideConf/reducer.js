import { SCROLL_POSTION_CHANGED, THEME_CHANGED } from "./identifiers";
import initialState from "./initialStates";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case THEME_CHANGED:
      return {
        ...state,
        theme: payload,
      };

    case SCROLL_POSTION_CHANGED:
      return {
        ...state,
        scrollPosition: payload,
      };

    default:
      return state;
  }
};

export default reducer;
