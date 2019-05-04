import { State } from "./../reducer/reducer";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import Vote from "../entity/Vote";
import { Action } from "redux";
import Note from "../entity/Note";

export const like: (
  noteHref: string
) => ThunkAction<void, State, undefined, Action<any>> = noteHref => (
  dispatch,
  getState
) => {
  const { user } = getState();
  axios
    .post("/votes", <Vote>{
      note: noteHref,
      userHash: user.userHash
    })
    .then(res => {});
};

export const removeLike: (
  noteHref: string
) => ThunkAction<void, State, undefined, Action<any>> = noteHref => (
  dispatch,
  getState
) => {
  const { board, user } = getState();
  const votes: Vote[] = (
    (board.board &&
      board.board.boardColumns &&
      board.board.boardColumns
        .flatMap(bc => bc.notes || [])
        .flatMap(
          note =>
            (note._links && note._links.self.href === noteHref && note.votes) ||
            []
        )) ||
    []
  ).filter(vote => vote.userHash === user.userHash && vote._links);

  Promise.all(votes.map(vote => axios.delete(vote._links && vote._links.self.href || ""))).then(res => {})
};
