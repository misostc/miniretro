import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import BoardEntity from "../entity/Board";
import { State } from "../reducer/reducer";
import { connect } from "react-redux";
import loadBoard from "../actions/load-board";
import BoardHeader from "./board-header";
import BoardBody from "./board-body";
import BoardWebSockets from "./board-web-sockets";

type DispatchProps = { loadBoard: (boardId: string) => void };
type OwnProps = RouteComponentProps<{ boardId: string }> & {};
type StateProps = { currentBoard: BoardEntity | null };

type Props = DispatchProps & OwnProps & StateProps;

class Board extends Component<Props> {
  componentDidMount() {
    const currentBoard = this.props.currentBoard;
    const boardId = this.props.match.params.boardId;
    if (!currentBoard || boardId !== currentBoard.id) {
      this.props.loadBoard(boardId);
    }
  } 

  render() {
    const currentBoard = this.props.currentBoard;
    return (
      currentBoard && (
        <>
          <BoardHeader board={currentBoard} />
          <BoardBody board={currentBoard} />
          <BoardWebSockets board={currentBoard} />
        </>
      )
    );
  }
}

export default connect(
  (state: State) => ({ currentBoard: state.board.board }),
  { loadBoard }
)(Board);
