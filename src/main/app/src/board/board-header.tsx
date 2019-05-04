import React, { Component } from "react";
import BoardEntity from "../entity/Board";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";
import "./board-header.scss";

type DispatchProps = {};
type OwnProps = { board: BoardEntity };
type StateProps = {};

type Props = DispatchProps & OwnProps & StateProps;

const BoardHeader: React.FC<Props> = ({ board }) => {
  return (
    <header className="BoardHeader">
      <div className="BoardHeader-left">
        <h1>{board.name}</h1>
      </div>
      <div className="BoardHeader-right" >
        <select name="oder">
          <option value="date">Sort by date</option>
          <option value="votes">Sort by votes</option>
        </select>
      </div>
    </header>
  );
};

export default connect(
  undefined,
  {}
)(BoardHeader);
