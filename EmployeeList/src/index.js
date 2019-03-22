import React, { Component } from "react";
import { render } from "react-dom";
import Users from "./components/Users";
import FilterUsers from "./components/FilterUsers";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from "./reducers/index";
import mySaga from "./sagas/index";

const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(allReducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(mySaga);
const App = () => (
  <div>
    <h1>User Details</h1>
    <FilterUsers />
    <Users />
  </div>
);

render(
  <Provider store={store}>    
    <App />
  </Provider>,
  document.getElementById("root")
);
