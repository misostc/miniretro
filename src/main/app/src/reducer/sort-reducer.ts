import { SortAction } from "../actions/sort";
import { Reducer } from "redux";

export type State = "BY_DATE" | "BY_VOTES";

const sortReducer: Reducer<State, SortAction> = (
  initialState = "BY_DATE",
  action
) => (action.type === "SET_SORT" ? action.sort : initialState);

export default sortReducer;
