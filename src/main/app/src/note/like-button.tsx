import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as ThumbsUpOutline } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as ThumbsUpFilled } from "@fortawesome/free-solid-svg-icons";
import { CountBadge } from "./note";

import { like, removeLike } from "../actions/like-actions";
import { connect } from "react-redux";
import { State } from "../reducer/reducer";
import { NoteVote } from "../entity/entities";

type StateProps = { userVoted: boolean; votes: NoteVote[] };
type DispatchProps = {
  like: (href: string) => void;
  removeLike: (href: string) => void;
};
type OwnProps = { noteId: string; noteHref: string };
type Props = StateProps & OwnProps & DispatchProps;

class LikeButton extends React.Component<Props> {
  render() {
    return (
      <button
        title="Like"
        onClick={() =>
          this.props.userVoted
            ? this.props.removeLike(this.props.noteHref)
            : this.props.like(this.props.noteHref)
        }
      >
        <FontAwesomeIcon
          icon={this.props.userVoted ? ThumbsUpFilled : ThumbsUpOutline}
        />
        <CountBadge elements={this.props.votes} />
      </button>
    );
  }
}

export default connect(
  (state: State, props: OwnProps) => {
    const votes = state.board.votes.filter(vote => vote.note === props.noteId);
    const userVoted = votes.filter(vote => vote.userHash === state.user.userHash).length === 1;
    return {userVoted, votes};
  },
  { like, removeLike }
)(LikeButton);
