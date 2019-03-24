import Board from "../entity/Board";
import { Action } from "redux";

export type BoardLoadedAction = Action<"BOARD_LOADED"> & {
  board: Board | null;
};

const boardLoaded: (board: Board | null) => BoardLoadedAction = board => ({
  type: "BOARD_LOADED",
  board
});

export default boardLoaded;
