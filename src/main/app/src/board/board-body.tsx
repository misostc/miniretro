import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import BoardEntity from "../entity/Board";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";

type DispatchProps = {};
type OwnProps = { board: BoardEntity };
type StateProps = {};

type Props = DispatchProps & OwnProps & StateProps;

const BoardBody: React.FC<Props> = ({ board }) => {
  const { boardColumns } = board;
  return (
    <main>
      {boardColumns && boardColumns.sort((b1,b2) => b1.sortOrder - b2.sortOrder).map((bc, key) => <h2 key={key}>{bc.name}</h2>)}
    </main>
  );
};

export default connect(
  undefined,
  {}
)(BoardBody);
