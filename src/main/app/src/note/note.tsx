import React, { Component } from "react";
import { connect } from "react-redux";

import { Note as NoteEntity } from "../entity/entities";

import EditButton from "./edit-button";
import CommentButton from "./comment-button";
import LikeButton from "./like-button";

import "./note.scss";
import { State } from "../reducer/reducer";
import EditNoteForm from "./edit-note-form";

type DispatchProps = {};
type OwnProps = { note: NoteEntity };
type StateProps = { openEdit: boolean};

type Props = DispatchProps & OwnProps & StateProps;

export const CountBadge: React.FC<{ elements: Array<any> | undefined }> = ({
  elements
}) =>
  (elements && elements.length > 0 && (
    <span className="Note-actions-badge">{elements.length}</span>
  )) ||
  null;

const Note: React.FC<Props> = ({ note, openEdit }) => {
  return (
    <div className="Note">
      <div className="Note-content">{openEdit ? <EditNoteForm /> : note.content}</div>
      <div className="Note-actions">
        <EditButton noteHref={note.selfLink} noteText={note.content} />
        {/* <CommentButton
          noteId={note.id}
          noteHref={note.selfLink}
        /> */}
        <LikeButton noteId={note.id} 
          noteHref={note.selfLink} />
      </div>
    </div>
  );
};

export default connect(
  (state: State, props: OwnProps) => ({openEdit: !!state.uiState.editNote && state.uiState.editNote.noteHref === props.note.selfLink}),
  {}
)(Note);
