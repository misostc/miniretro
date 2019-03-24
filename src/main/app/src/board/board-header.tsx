import React, { Component } from "react";
import BoardEntity from "../entity/Board";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";

type DispatchProps = {};
type OwnProps = { board: BoardEntity };
type StateProps = {};

type Props = DispatchProps & OwnProps & StateProps;

const BoardHeader: React.FC<Props> = ({ board }) => {
  return (
    <header>
      <h1>{board.name}</h1>
    </header>
  );
};

export default connect(
  undefined,
  {}
)(BoardHeader);
