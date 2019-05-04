import { StateChangeAction } from './../actions/state-change';
import { BoardLoadedAction } from "./../actions/board-loaded";
import { Reducer } from "redux";
import Board from "../entity/Board";
import { handleChange } from './handle-change';

export type State = {
  board: Board | null;
};

const boardReducer: Reducer<State, BoardLoadedAction | StateChangeAction> = (
  initialState = { board: null },
  action
) => {
  if (action.type === "BOARD_LOADED") {
    return { board: action.board };
  }
  if (action.type === "STATE_CHANGE") {
    return { board: initialState.board && handleChange(initialState.board, action.change)}
  }
  return initialState;
};

export default boardReducer;
