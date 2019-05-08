import React, { Component } from "react";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";
import "./board-header.scss";
import { ActionCreator } from "redux";
import sortChange, { SortAction } from "../actions/sort";

type DispatchProps = { sortChange: ActionCreator<SortAction> };
type OwnProps = { boardName: string };
type StateProps = { sortValue: string };

type Props = DispatchProps & OwnProps & StateProps;

const BoardHeader: React.FC<Props> = ({ boardName, sortValue, sortChange }) => {
  return (
    <header className="BoardHeader">
      <div className="BoardHeader-left">
        <h1>{boardName}</h1>
      </div>
      <div className="BoardHeader-right" >
        <select name="oder" value={sortValue} onChange={({target}) => sortChange(target.value)}>
          <option value="BY_DATE">Sort by date</option>
          <option value="BY_VOTES">Sort by votes</option>
        </select>
      </div>
    </header>
  );
};

export default connect(
  (state: State) => ({sortValue: state.sort}),
  { sortChange }
)(BoardHeader);
