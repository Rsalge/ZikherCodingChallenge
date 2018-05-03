import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from "./reducers";
import promise from "redux-promise";
import Homepage from "./components/HomePage";
import Search from "./components/Search";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Search />
        <Route path="/" component={Homepage} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
