import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import boardReducer, { State as BoardReducerState } from "./board-reducer";
import userReducer, { State as UserReducerState } from "./user-reducer";
import { History } from "history";
import uiStateReducer, { State as UiStateReducerState } from "./ui-state-reducer";

export type State = {
  board: BoardReducerState;
  uiState: UiStateReducerState;
  router: RouterState;
  user: UserReducerState;
};

export default (history: History) =>
  combineReducers<State>({
    board: boardReducer,
    uiState: uiStateReducer,
    user: userReducer,
    router: connectRouter(history)
  });
