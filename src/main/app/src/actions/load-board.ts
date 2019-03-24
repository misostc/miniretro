import axios from "axios";
import { push, RouterAction } from "connected-react-router";
import { ThunkAction } from "redux-thunk";
import Board from "../entity/Board";
import boardLoaded, { BoardLoadedAction } from "./board-loaded";

export default (
  boardId: string
): ThunkAction<
  void,
  {},
  undefined,
  RouterAction | BoardLoadedAction
> => dispatch => {
  axios.get(`/boards/${boardId}?projection=fullBoard`).then(
    response => {
      dispatch(boardLoaded(response.data));
    },
    error => {
      dispatch(push("/"));
    }
  );
};
