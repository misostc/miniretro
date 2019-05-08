import { Action } from "redux";
import { State } from "../reducer/board-reducer";

export type BoardLoadedAction = Action<"BOARD_LOADED"> & {
  state: State
};

const boardLoaded: (state: State) => BoardLoadedAction = state => ({
  type: "BOARD_LOADED",
  state
});

export default boardLoaded;
