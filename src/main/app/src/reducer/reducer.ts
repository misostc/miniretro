import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import boardReducer from "./board-reducer";
import { History } from "history";
import uiStateReducer from "./ui-state-reducer";

export default (history: History) => combineReducers({
    board: boardReducer,
    uiState: uiStateReducer,
    router: connectRouter(history)
})