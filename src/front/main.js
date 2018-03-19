import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "reducers/application";
import App from "components/app";
import { usersFetch } from "action/creators";

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
);

store.dispatch(usersFetch());
