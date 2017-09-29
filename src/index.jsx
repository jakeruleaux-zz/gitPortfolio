import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";




ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("react-app-root")
);
