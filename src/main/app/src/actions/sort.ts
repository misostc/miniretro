import { Action } from "redux";
import { State as SortState } from "../reducer/sort-reducer";

export type SortAction = Action<"SET_SORT"> & {
    sort: SortState
};

export default (sort: SortState) => <SortAction>{
    type: "SET_SORT",
    sort
};