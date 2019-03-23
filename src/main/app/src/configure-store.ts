import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";

const w = <any>window;
export const history = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    reducer(history),
    {},
    compose(
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(thunk),
      w.__REDUX_DEVTOOLS_EXTENSION__
        ? w.__REDUX_DEVTOOLS_EXTENSION__()
        : (a: any) => a
    )
  );

  return store;
}
