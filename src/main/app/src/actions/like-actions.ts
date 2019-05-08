import { State } from "./../reducer/reducer";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { Action } from "redux";

export const like: (
  noteHref: string
) => ThunkAction<void, State, undefined, Action<any>> = noteHref => (
  dispatch,
  getState
) => {
  const { user } = getState();
  axios
    .post("/votes", {
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
  const note = board.notes.filter(note => note.selfLink === noteHref).pop();
  if (note) {
    const votes = board.votes.filter(vote => vote.note === note.id && vote.userHash === user.userHash);
    Promise.all(votes.map(vote => axios.delete(vote.selfLink))).then(res => {})
  }
};
