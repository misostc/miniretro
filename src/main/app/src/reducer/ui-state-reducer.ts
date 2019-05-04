import { UIActions } from "../actions/ui-actions";
import { Reducer } from "redux";

export type State = {
  newComment: {
    text: string;
    noteHref: string;
  } | null;
  editNote: {
    text: string;
    noteHref: string;
  } | null;
  newNote: {
    text: string;
    boardColumnHref: string;
  } | null;
};

const uiReducer: Reducer<State, UIActions> = (
  state = { newNote: null, newComment: null, editNote: null },
  action
) => {
  if (action.type === "OPEN_COMMENTS") {
    return {
      newNote: null, newComment: {text: '', noteHref: action.noteHref}, editNote: null
    };
  }
  if (action.type === "OPEN_EDIT") {
    return {
      newNote: null, newComment: null, editNote: {text: '', noteHref: action.noteHref},
    };
  }
  if (action.type === "OPEN_NEW") {
    return {
      newNote: {text: '', boardColumnHref: action.boardColumnHref}, newComment: null, editNote: null,
    };
  }
  if (action.type === "NEW_NOTE_TEXT") {
    return {
      newNote: state.newNote && {...state.newNote, text: action.text}, newComment: null, editNote: null,
    };
  }
  return state;
};

export default uiReducer;
