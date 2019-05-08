import React, { Component } from "react";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";
import "./board-body.scss";
import { BoardColumn as BoardColumnEntity } from "../entity/entities";
import BoardColumn from "../board-column/board-column";

type DispatchProps = {};
type OwnProps = { boardId: string };
type StateProps = { boardColumns: BoardColumnEntity[] };

type Props = DispatchProps & OwnProps & StateProps;

const BoardBody: React.FC<Props> = ({ boardColumns }) => {
  return (
    <main className="BoardBody">
      {boardColumns &&
        boardColumns
          .sort((b1, b2) => b1.sortOrder - b2.sortOrder)
          .map((bc, key) => (
            <div className="BoardBody-column" key={key}>
              <BoardColumn boardColumn={bc} />{" "}
            </div>
          ))}
    </main>
  );
};

export default connect(
  (state: State, props: OwnProps) => ({
    boardColumns: state.board.boardColumns.filter(
      bc => bc.board === props.boardId
    )
  }),
  {}
)(BoardBody);
