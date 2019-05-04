import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import BoardColumnEntity from "../entity/BoardColumn";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";
import Note from "../note/note";
import CreateNote from "../note/create-note";

import "./board-column.scss"
import CreateNoteForm from "../note/create-note-form";

type DispatchProps = {};
type OwnProps = { boardColumn: BoardColumnEntity };
type StateProps = { isNewOpened: boolean };

type Props = DispatchProps & OwnProps & StateProps;

const BoardColumn: React.FC<Props> = ({ boardColumn, isNewOpened }) => {
  return (
    <div className="BoardColumn">
      <h2>{boardColumn.name}</h2>
      {boardColumn.notes &&
        boardColumn.notes.map((note, i) => (
          <div key={i} className="BoardColumn-note">
            <Note note={note} />
          </div>
        ))}
      {isNewOpened && <CreateNoteForm />}
      {!isNewOpened && boardColumn._links && <CreateNote boardColumnHref={boardColumn._links.self.href} />}
    </div>
  );
};

export default connect(
  ((state: State, {boardColumn}: OwnProps) => ({
    isNewOpened: !!boardColumn._links && !!state.uiState.newNote && state.uiState.newNote.boardColumnHref == boardColumn._links.self.href
  })),
  {}
)(BoardColumn);
