import { StateChangeAction } from './../actions/state-change';
import { BoardLoadedAction } from "./../actions/board-loaded";
import { Reducer } from "redux";
import { handleChange } from './handle-change';
import { Board, BoardColumn, Note, NoteVote, NoteComment } from '../entity/entities';

export type State = {
  board: Board | null;
  boardColumns: BoardColumn[];
  notes: Note[];
  votes: NoteVote[];
  comments: NoteComment[];
};

const boardReducer: Reducer<State, BoardLoadedAction | StateChangeAction> = (
  initialState = { board: null, boardColumns: [], notes: [], votes: [], comments: [] },
  action
) => {
  if (action.type === "BOARD_LOADED") {
    return action.state;
  }
  if (action.type === "STATE_CHANGE") {
    return handleChange(initialState, action.change)
  }
  return initialState;
};

export default boardReducer;
