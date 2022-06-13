import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as ReactDomClient from "react-dom/client";
import App from "./components/App";
import reducers from "./reducers";
const root = ReactDomClient.createRoot(document.getElementById("root"));
const store = createStore(reducers, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
