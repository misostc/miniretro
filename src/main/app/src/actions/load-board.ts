import axios from "axios";
import { push, RouterAction } from "connected-react-router";
import { ThunkAction } from "redux-thunk";
import boardLoaded, { BoardLoadedAction } from "./board-loaded";
import { State } from "../reducer/board-reducer";

type APIBoard = {
  id: string;
  name: string;
};

export default (
  boardId: string
): ThunkAction<
  void,
  {},
  undefined,
  RouterAction | BoardLoadedAction
> => dispatch => {
  axios.get<State>("/boardLoad", { params: { id: boardId } }).then(
    response => {
      dispatch(boardLoaded(response.data));
    },
    error => {
      dispatch(push("/"));
    }
  );
};
