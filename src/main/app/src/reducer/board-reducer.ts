import { BoardLoadedAction } from "./../actions/board-loaded";
import Board from "../entity/Board";

export type State = {
  board: Board | null;
};

export default (initialState: State = {board: null}, action: BoardLoadedAction) => {
  if (action.type === "BOARD_LOADED") {
    return { board: action.board };
  }
  return initialState;
};
