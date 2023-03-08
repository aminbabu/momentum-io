import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/app/store";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);
