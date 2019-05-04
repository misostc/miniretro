import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as ThumbsUpOutline } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as ThumbsUpFilled } from "@fortawesome/free-solid-svg-icons";
import { CountBadge } from "./note";

import Vote from "../entity/Vote";
import { like, removeLike } from "../actions/like-actions";
import { connect } from "react-redux";
import { State } from "../reducer/reducer";

type StateProps = { userVoted: boolean };
type DispatchProps = { like: (href: string) => void, removeLike: (href: string) => void };
type OwnProps = { noteHref: string; votes?: Vote[] };
type Props = StateProps & OwnProps & DispatchProps;

class LikeButton extends React.Component<Props> {
  render() {
    return (
      <button title="Like" onClick={() => this.props.userVoted ? this.props.removeLike(this.props.noteHref) : this.props.like(this.props.noteHref) }>
        <FontAwesomeIcon icon={this.props.userVoted? ThumbsUpFilled : ThumbsUpOutline} />
        <CountBadge elements={this.props.votes} />
      </button>
    );
  }
}

export default connect(
  (state: State, props: OwnProps) => ({
    userVoted:
      !!props.votes &&
      props.votes.filter(vote => vote.userHash == state.user.userHash).length ==
        1
  }),
  { like, removeLike }
)(LikeButton);
