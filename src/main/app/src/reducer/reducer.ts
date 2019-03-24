import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import boardReducer, { State as BoardReducerState } from "./board-reducer";
import { History } from "history";
import uiStateReducer, { State as UiStateReducerState } from "./ui-state-reducer";

export type State = {
  board: BoardReducerState;
  uiState: UiStateReducerState;
  router: RouterState;
};

export default (history: History) =>
  combineReducers({
    board: boardReducer,
    uiState: uiStateReducer,
    router: connectRouter(history)
  });
