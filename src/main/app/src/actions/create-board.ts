import boardLoaded, { BoardLoadedAction } from './board-loaded';
import { CreateBoardValues } from './../create-board/create-board-form';
import axios from 'axios';
import { push, RouterAction } from 'connected-react-router';
import { ThunkAction } from 'redux-thunk';
import BoardColumn from '../entity/BoardColumn';
import Board from '../entity/Board';

export default (values: CreateBoardValues): ThunkAction<void, {}, undefined, RouterAction | BoardLoadedAction> => (dispatch) => {
    axios
      .post("/boards", <Board>{
        name: values.name
      })
      .then(response => {
        let uri: string =
          response.headers["Location"] || response.headers["location"];
        Promise.all(
          values.template
            .split(" | ")
            .map((name, index) => {
              return <BoardColumn>{
                name,
                sortOrder: index,
                board: uri
              };
            })
            .map(boardColumn => axios.post("/boardColumns", boardColumn))
        ).then(_ => {
            dispatch(boardLoaded(null));
            dispatch(push(`/b/${uri.replace(/^.*[/]/, "")}`));
        });
      }); 
}