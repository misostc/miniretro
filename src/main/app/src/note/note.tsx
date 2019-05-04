import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import NoteEntity from "../entity/Note";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";

import EditButton from "./edit-button";
import CommentButton from "./comment-button";
import LikeButton from "./like-button";

import "./note.scss";

type DispatchProps = {};
type OwnProps = { note: NoteEntity };
type StateProps = {};

type Props = DispatchProps & OwnProps & StateProps;

export const CountBadge: React.FC<{ elements: Array<any> | undefined }> = ({
  elements
}) =>
  (elements && elements.length > 0 && (
    <span className="Note-actions-badge">{elements.length}</span>
  )) ||
  null;

const Note: React.FC<Props> = ({ note }) => {
  return (
    <div className="Note">
      <div className="Note-content">{note.content}</div>
      {note._links && (
        <div className="Note-actions">
          <EditButton noteHref={note._links.self.href} />
          <CommentButton noteHref={note._links.self.href} comments={note.comments} />
          <LikeButton noteHref={note._links.self.href} votes={note.votes} />
        </div>
      )}
    </div>
  );
};

export default connect(
  undefined,
  {}
)(Note);
