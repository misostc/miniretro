import React, { Component } from "react";
import { BoardColumn as BoardColumnEntity, Note as NoteEntity } from "../entity/entities";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";
import Note from "../note/note";
import CreateNote from "../note/create-note";
import { State as SortReducerState } from "../reducer/sort-reducer";

import "./board-column.scss"
import CreateNoteForm from "../note/create-note-form";

type DispatchProps = {};
type OwnProps = { boardColumn: BoardColumnEntity };
type StateProps = { isNewOpened: boolean, notes: NoteEntity[]};

type Props = DispatchProps & OwnProps & StateProps;

const BoardColumn: React.FC<Props> = ({ boardColumn, notes, isNewOpened }) => {
  return (
    <div className="BoardColumn">
      <h2>{boardColumn.name}</h2>
      { notes.map((note, i) => (
          <div key={i} className="BoardColumn-note">
            <Note note={note} />
          </div>
        ))}
      {isNewOpened && <CreateNoteForm />}
      {!isNewOpened && <CreateNote boardColumnHref={boardColumn.selfLink} />}
    </div>
  );
};

export default connect(
  ((state: State, {boardColumn}: OwnProps) => ({
    isNewOpened: !!state.uiState.newNote && state.uiState.newNote.boardColumnHref == boardColumn.selfLink,
    notes: state.board.notes.filter(note => note.boardColumn === boardColumn.id).sort((n1,n2) => {
      if (state.sort === "BY_DATE") {
        return n1.createdDate.localeCompare(n2.createdDate);
      }
      const n2votes = state.board.votes.filter(v => v.note === n2.id).length;
      const n1votes = state.board.votes.filter(v => v.note === n1.id).length;

      return n2votes - n1votes != 0 ? n2votes - n1votes : n1.createdDate.localeCompare(n2.createdDate);
    })
  })),
  {}
)(BoardColumn);
