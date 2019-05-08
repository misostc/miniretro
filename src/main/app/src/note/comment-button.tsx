import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment as CommentOutline } from "@fortawesome/free-regular-svg-icons";
import { CountBadge } from "./note";

import { connect } from "react-redux";
import { OpenCommentsAction, openComments } from "../actions/ui-actions";
import { NoteComment } from "../entity/entities";
import { State } from "../reducer/reducer";

type StateProps = { comments: NoteComment[] };
type DispatchProps = { openComments: (noteHref: string) => OpenCommentsAction };
type OwnProps = { noteId: string; noteHref: string };
type Props = OwnProps & DispatchProps & StateProps;

const CommentButton: React.FC<Props> = props => {
  return (
    <button title="Comment" onClick={() => props.openComments(props.noteHref)}>
      <FontAwesomeIcon icon={CommentOutline} />
      <CountBadge elements={props.comments} />
    </button>
  );
};

export default connect(
  (state: State, props: OwnProps) => ({
    comments: state.board.comments.filter(
      comments => comments.note === props.noteId
    )
  }),
  { openComments }
)(CommentButton);
