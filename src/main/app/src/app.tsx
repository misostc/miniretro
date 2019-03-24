import React, { Component } from "react";
import { Router, Route } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from "./configure-store";
import CreateBoard from "./create-board/create-board";
import Board from "./board/board";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <>
            <Route path="/" exact component={CreateBoard} />
            <Route path="/b/:boardId" component={Board} />
          </>
        </ConnectedRouter>
      </Provider>
    );
  }
}


export default App;
