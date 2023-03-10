import { combineReducers } from "redux";
import siteConfReducer from "../features/sideConf/reducer";

const rootReducer = combineReducers({
  siteConf: siteConfReducer,
});

export default rootReducer;
