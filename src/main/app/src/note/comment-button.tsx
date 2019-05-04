import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment as CommentOutline } from "@fortawesome/free-regular-svg-icons";
import { CountBadge } from "./note";

import Comment from "../entity/Comment";
import { connect } from "react-redux";
import { OpenCommentsAction, openComments } from "../actions/ui-actions";

type DispatchProps = {openComments: (noteHref: string) => OpenCommentsAction};
type OwnProps = {noteHref:string, comments?: Comment[]}
type Props = OwnProps & DispatchProps;

const CommentButton: React.FC<Props> = props => {
  return <button title="Comment" onClick={() => props.openComments(props.noteHref)}>
        <FontAwesomeIcon icon={CommentOutline} />
        <CountBadge elements={props.comments} />
      </button>;
};

export default connect(undefined, {openComments})(CommentButton)
