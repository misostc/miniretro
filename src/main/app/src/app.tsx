import React, { Component } from "react";
import { Router, Route } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from "./configure-store";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <>
            <Route path="/">
              <h1>Hello world!</h1>
            </Route>
          </>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
